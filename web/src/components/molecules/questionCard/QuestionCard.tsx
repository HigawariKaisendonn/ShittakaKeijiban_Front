"use client";
import { Text } from '@/components/atoms/text/Text';
import { Input } from "@/components/atoms/input/Input";
import "./question-card.scss";
import React from 'react';
import { Genre } from "@/types/Genre";

interface QuetionCardProps{
  title: string;
  question: string;
  setTitleAction: (value: string) => void;
  setQuestionAction: (value: string) => void;
  genres: Genre[];
  selectedGenre: number | null;
  onGenreSelect: (genreId: number) => void;
}

export const QuestionCard : React.FC<QuetionCardProps>= ({ title, question, setTitleAction, setQuestionAction, genres, selectedGenre, onGenreSelect }) => {
  console.log('QuestionCard - genres:', genres);
  console.log('QuestionCard - selectedGenre:', selectedGenre);

  return (
    <div className="question-card">
      <Text variant='subtitle'>問題文作成</Text>
      <Input
        placeholder="タイトルを入力"
        className="title-input"
        value={title}
        onChange={(e) => setTitleAction(e.target.value)}
      />

      <select
        value={selectedGenre || ""}
        onChange={(e) => onGenreSelect(Number(e.target.value))}
        className="genre-select"
      >
        <option value="">ジャンルを選択してください</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      <textarea
        placeholder="問題文を入力"
        className="question-textarea"
        value={question}
        onChange={(e) => setQuestionAction(e.target.value)}
      />
    </div>
  );
};

