"use client";
import "./creation-card.scss";
import { Button } from "@/components/atoms/button/button";
import { QuestionCard }  from "@/components/molecules/questionCard/QuestionCard";
import { ChoicesCard } from "@/components/molecules/choicesCard/ChoicesCard";
import { AnswerCard } from "@/components/molecules/answerCard/AnswerCard";
import { ExplanationCard } from "@/components/molecules/explanationCard/explanationCard";
import { useState } from "react";


export const CreationCard = () => {
  // 問題作成フォームのページ管理
  const [currentStep, setCurrentStep] = useState(0);

  // 各要素の状態管理
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [explanation, setExplanation] = useState("");

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

  // フォームの送信処理
  const handleSubmit = () => {
    const emptyFields = [];
    if (!question) {
      emptyFields.push("問題文");
    }
    if (choices.filter(choice => choice.trim() !== "").length < 2) {
      emptyFields.push("選択肢(2つ以上必要)");
    }
    if (answerIndex === null) {
      emptyFields.push("解答");
    }
    if (!explanation) {
      emptyFields.push("解説");
    }

    if (emptyFields.length > 0) {
      alert(`${emptyFields.join(", ")}が未入力です。再度入力してください。`);
      return;
    }
    else {
      const message = `
      問題文: ${question}
      選択肢: ${choices.join(", ")}
      選択された解答: ${answerIndex !== null ? choices[answerIndex] : "未選択"}
      解説: ${explanation}
      `;
      alert(message);
    }
  };

  switch (currentStep) {
    case 0:
      return (
        <div className="creationcard-container">
          <QuestionCard question={question} setQuestionAction={setQuestion} />
          <ChoicesCard choices={choices} choicesChangeAction={choiceChange} />
          <div className="button-container">
            <Button variant="secondary" onClick={() => setCurrentStep(1)}>
              次へ
            </Button>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <div className="creationcard-container">
            <AnswerCard choices={choices} answerIndex={answerIndex} setAnswerIndexAction={setAnswerIndex} />
            <ExplanationCard explanation={explanation} setExplanationAction={setExplanation} />
            <div className="button-container">
              <Button variant="primary" onClick={handleSubmit}>
                投稿
              </Button>
              <Button variant="secondary" onClick={() => setCurrentStep(0)}>
                戻る
              </Button>
            </div>
          </div>
        </div>
      );
  }
};
