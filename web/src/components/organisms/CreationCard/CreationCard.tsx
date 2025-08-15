"use client";
import "./creation-card.scss";
import { Text } from '@/components/atoms/text/Text';
import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/Input";
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
    setAnswerIndex(null);
  };

  // フォームの送信処理
  const handleSubmit = () => {
    const emptyFields = [];
    if (!question) emptyFields.push("問題文");
    if (choices.filter(choice => choice.trim() === "").length > 2) emptyFields.push("選択肢");
    if (answerIndex === null) emptyFields.push("解答");
    if (!explanation) emptyFields.push("解説");

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
          <div className="card">
            <Text variant='subtitle'>問題文作成</Text>
            <textarea
              placeholder="問題文を入力"
              className="textarea-large"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="card">
            <Text variant='subtitle'>選択肢作成</Text>
            {choices.map((choice, index) => (
              <Input
                key={index}
                placeholder={`選択肢${index + 1}`}
                className={"input-margin"}
                value={choice}
                onChange={(e) => choiceChange(index, e.target.value)}
              />
            ))}
            <div className="button-container">
              <Button variant="secondary" onClick={() => setCurrentStep(1)}>
                次へ
              </Button>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="creationcard-container">
          <div className="card">
            <Text variant='subtitle'>解答選択</Text>
            {choices.map((choice, index) => (
              <Button
                className="input-margin"
                key={index}
                onClick={() => setAnswerIndex(index)}
                disabled={choice.trim() === ""}
                variant={answerIndex === index ? "primary" : "danger"}
              >
                {choice || `入力されていません`}
              </Button>
            ))}
          </div>
          <div className="card">
            <Text variant='subtitle'>解説作成</Text>
            <textarea
              placeholder="解説文を入力"
              className="textarea-large"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
            />
            <div className="button-container">
              <Button variant="secondary" onClick={() => setCurrentStep(0)}>
                戻る
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                投稿
              </Button>
            </div>
          </div>
        </div>
      );
  }
};
