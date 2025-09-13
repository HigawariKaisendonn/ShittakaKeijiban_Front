"use client";
import "./creation-card.scss";
import apiClient from "@/lib/apiClient";
import { isAxiosError } from "axios";
import { Button } from "@/components/atoms/button/button";
import { QuestionCard } from "@/components/molecules/questionCard/QuestionCard";
import { ChoicesCard } from "@/components/molecules/choicesCard/ChoicesCard";
import { AnswerCard } from "@/components/molecules/answerCard/AnswerCard";
import { ExplanationCard } from "@/components/molecules/explanationCard/explanationCard";
import { useState, useEffect } from "react";

export const CreationCard = () => {
  // 問題作成フォームのページ管理
  const [currentStep, setCurrentStep] = useState(0);

  // 認証トークンの状態管理（安全なlocalStorage使用）
  const [token, setToken] = useState<string | null>(null);

  // フォームの送信処理
  const [isSubmitting, setIsSubmitting] = useState(false);

  // エラー状態管理
  const [error, setError] = useState<string | null>(null);

  // 各要素の状態管理
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState("");
  const [genre, setGenre] = useState<number | null>(null);
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState([false, false, false, false]);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);

  // クライアントサイドでのみlocalStorageにアクセス
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    setToken(storedToken);
  }, []);

  // 選択肢の内容変更時処理
  const choiceChange = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);

    // 選択された解答が空になった場合、未選択にする
    if (answerIndex === index && value.trim() === "") {
      setAnswerIndex(null);
    }
  };

  // バリデーション関数
  const isFormValid = () => {
    const validChoices = choices.filter(choice => choice.trim() !== "");
    return (
      title.trim() !== "" &&
      question.trim() !== "" &&
      validChoices.length >= 2 &&
      answerIndex !== null &&
      answerIndex < validChoices.length &&
      explanation.trim() !== ""
    );
  };

  // フォームリセット関数
  const resetForm = () => {
    setTitle("");
    setQuestion("");
    setChoices(["", "", "", ""]);
    setCorrect([false, false, false, false]);
    setAnswerIndex(null);
    setExplanation("");
    setGenre(null);
    setCurrentStep(0);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const validChoices = choices.filter(choice => choice.trim() !== "");

      // 1. 問題を作成
      const questionResponse = await apiClient.post('/api/questions', {
        title: title.trim(),
        question: question.trim(),
        genre: genre || 6, // デフォルトジャンル
        explanation: explanation.trim()
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const questionId = questionResponse.data.id || questionResponse.data.questionId;
      console.log('問題作成成功:', questionResponse.data);

      // 2. 選択肢を作成
      const choicesResponse = await apiClient.post('/api/choices/create', {
        questionId: questionId,
        choices: validChoices,
        correct: 
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('選択肢作成成功:', choicesResponse.data);

      alert('問題を投稿しました！');
      resetForm();

    } catch (error: unknown) {
      console.error('投稿失敗:', error);

      let errorMessage = '予期せぬエラーが発生しました。';

      // 型ガードを使ってエラーの型を確認
      if (error instanceof Error) {
        console.error('エラーメッセージ:', error.message);
      }

      // Axiosエラーかどうかをチェック
      if (isAxiosError(error)) {
        const status = error.response?.status;

        switch (status) {
          case 400:
            errorMessage = '入力内容に誤りがあります。確認してください。';
            break;
          case 401:
            errorMessage = 'ログインが必要です。';
            break;
          case 500:
            errorMessage = 'サーバーエラーが発生しました。';
            break;
          default:
            errorMessage = '投稿に失敗しました。';
        }
      }

      setError(errorMessage);
      
      // 部分的に作成されたデータのクリーンアップが必要な場合は
      // ここでrollback処理を実装することも考慮
      
    } finally {
      setIsSubmitting(false);
    }
  };

  switch (currentStep) {
    case 0:
      return (
        <div className="creationcard-container">
          {error && (
            <div className="error-message" role="alert" style={{color: 'red', marginBottom: '1rem'}}>
              {error}
            </div>
          )}
          <QuestionCard 
            question={question} 
            title={title} 
            setQuestionAction={setQuestion} 
            setTitleAction={setTitle} 
          />
          <ChoicesCard choices={choices} choicesChangeAction={choiceChange} />
          <div className="button-container">
            <Button
              variant="secondary"
              onClick={() => setCurrentStep(1)}
              disabled={isSubmitting || !title.trim() || !question.trim() || choices.filter(c => c.trim()).length < 2}
            >
              次へ
            </Button>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <div className="creationcard-container">
            {error && (
              <div className="error-message" role="alert" style={{color: 'red', marginBottom: '1rem'}}>
                {error}
              </div>
            )}
            <AnswerCard 
              choices={choices} 
              answerIndex={answerIndex} 
              setAnswerIndexAction={setAnswerIndex} 
            />
            <ExplanationCard 
              explanation={explanation} 
              setExplanationAction={setExplanation} 
            />
            <div className="button-container">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid()}
              >
                {isSubmitting ? '投稿中...' : '投稿'}
              </Button>
              <Button
                variant="secondary"
                onClick={() => setCurrentStep(0)}
                disabled={isSubmitting}
              >
                戻る
              </Button>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};