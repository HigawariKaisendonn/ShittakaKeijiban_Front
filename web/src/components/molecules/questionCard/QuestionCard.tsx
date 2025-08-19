"use client";
import { Text } from '@/components/atoms/text/Text';
import "./question-card.scss";
import React from 'react';

interface QuetionCardProps{
    question: string;
    setQuestionAction: (value: string) => void;
}

export const QuestionCard : React.FC<QuetionCardProps>= ({ question, setQuestionAction }) => {
  return (
    <div className="question-card">
      <Text variant='subtitle'>問題文作成</Text>
      <textarea
        placeholder="問題文を入力"
        className="question-textarea"
        value={question}
        onChange={(e) => setQuestionAction(e.target.value)}
      />
    </div>
  );
};

