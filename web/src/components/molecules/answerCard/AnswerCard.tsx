"use client";
import "./answer-card.scss";
import { Button } from "@/components/atoms/button/button";
import { Text } from '@/components/atoms/text/Text';
import React from 'react';

interface AnswerCardProps {
  choices: string[];
  setAnswerIndexAction: (index: number) => void;
}

export const AnswerCard: React.FC<AnswerCardProps> = ({ choices, setAnswerIndexAction }) => {
  return (
    <div className="answer-card">
      <Text variant='subtitle'>解答選択</Text>
      {choices.map((choice, index) => (
        <Button
          className="answer-button"
          key={index}
          onClick={() => setAnswerIndexAction(index)}
          disabled={choice.trim() === ""}
          variant={choices[index] ? "primary" : "danger"}
        >
          {choice || `入力されていません`}
        </Button>
      ))}
    </div>
  );
};