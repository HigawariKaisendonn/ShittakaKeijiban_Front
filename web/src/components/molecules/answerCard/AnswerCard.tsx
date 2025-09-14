"use client";
import "./answer-card.scss";
import { Button } from "@/components/atoms/button/button";
import { Text } from '@/components/atoms/text/text';
import React from 'react';

interface AnswerCardProps {
  choices: string[];
  answerIndex: number | null;
  setAnswerIndexAction: (index: number) => void;
}

export const AnswerCard: React.FC<AnswerCardProps> = ({ choices, answerIndex, setAnswerIndexAction }) => {
  return (
    <div className="answer-card">
      <Text variant='subtitle'>解答選択</Text>
      {choices.map((choice, index) => {
        const isSelected = answerIndex === index;
        const isEmpty = choice.trim() === "";

        let buttonClass = "answer-button";
        if (isEmpty) {
          buttonClass += " empty";
        } else if (isSelected) {
          buttonClass += " selected";
        } else {
          buttonClass += " default";
        }

        return (
          <Button
            className={buttonClass}
            key={index}
            onClick={() => setAnswerIndexAction(index)}
            disabled={isEmpty}
            variant={isEmpty ? "danger" : isSelected ? "primary" : "secondary"}
          >
            {choice || `入力されていません`}
          </Button>
        );
      })}
    </div>
  );
};