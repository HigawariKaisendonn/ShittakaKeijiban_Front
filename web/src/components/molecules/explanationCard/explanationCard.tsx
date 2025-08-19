"use client";
import "./explanation-card.scss";
import { Text } from '@/components/atoms/text/Text';
import React from 'react';

interface ExplanationCardProps {
  explanation: string;
  setExplanationAction: (value: string) => void;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({ explanation, setExplanationAction }) => {
  return (
    <div className="explanation-card">
      <Text variant='subtitle'>解説作成</Text>
      <textarea
        placeholder="解説文を入力"
        className="explanation-textarea"
        value={explanation}
        onChange={(e) => setExplanationAction(e.target.value)} // 関数名を変更
      />
    </div>
  );
};
