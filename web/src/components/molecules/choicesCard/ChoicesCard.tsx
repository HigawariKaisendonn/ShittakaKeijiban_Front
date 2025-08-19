"use client";
import "./choices-card.scss"
import { Input } from "@/components/atoms/input/Input";
import { Text } from '@/components/atoms/text/Text';
import React from 'react';

interface ChoicesCardProps {
  choices: string[];
  choicesChangeAction: (index: number, value: string) => void;
}

export const ChoicesCard : React.FC<ChoicesCardProps> = ({ choices, choicesChangeAction }) => {
  return (
    <div className="choices-card">
      <Text variant='subtitle'>選択肢作成</Text>
      {choices.map((choices, index) => (
        <Input
          key={index}
          placeholder={`選択肢${index + 1}`}
          className="choices-input"
          value={choices}
          onChange={(e) => choicesChangeAction(index, e.target.value)}
        />
      ))}
    </div>
  );
};

