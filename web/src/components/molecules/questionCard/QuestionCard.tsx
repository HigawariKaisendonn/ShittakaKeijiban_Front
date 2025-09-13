"use client";
import { Text } from '@/components/atoms/text/Text';
import { Input } from "@/components/atoms/input/Input";
import "./question-card.scss";
import React from 'react';

interface QuetionCardProps{
  title: string;
  question: string;
  setTitleAction: (value: string) => void;
  setQuestionAction: (value: string) => void;
}

export const QuestionCard : React.FC<QuetionCardProps>= ({ title, question, setTitleAction, setQuestionAction }) => {
  return (
    <div className="question-card">
      <Text variant='subtitle'>問題文作成</Text>
      <Input
        placeholder="タイトルを入力"
        className="title-input"
        value={title}
        onChange={(e) => setTitleAction(e.target.value)}
      />
      <textarea
        placeholder="問題文を入力"
        className="question-textarea"
        value={question}
        onChange={(e) => setQuestionAction(e.target.value)}
      />
    </div>
  );
};

