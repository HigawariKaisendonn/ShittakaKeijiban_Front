"use client";
import { Text } from '@/components/atoms/text/text';
import { Input } from "@/components/atoms/input/input";
import "./question-card.scss";
import React, { useState } from 'react';
import { Genre } from "@/types/Genre";
import { GenrePopup } from "@/components/molecules/genrePopup/GenrePopup";

interface QuetionCardProps{
  title: string;
  question: string;
  setTitleAction: (value: string) => void;
  setQuestionAction: (value: string) => void;
  genres: Genre[];
  selectedGenre: number | null;
  onGenreSelect: (genreId: number) => void;
  onAddGenre: (genreName: string) => Promise<void>;
}

export const QuestionCard : React.FC<QuetionCardProps>= ({ title, question, setTitleAction, setQuestionAction, genres, selectedGenre, onGenreSelect, onAddGenre }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

      <div className="genre-selector-container">
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
        <button
          type="button"
          onClick={() => setIsPopupOpen(true)}
          className="add-genre-button"
          title="新しいジャンルを追加"
        >
          +
        </button>
      </div>

      <textarea
        placeholder="問題文を入力"
        className="question-textarea"
        value={question}
        onChange={(e) => setQuestionAction(e.target.value)}
      />

      <GenrePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onAddGenre={onAddGenre}
      />
    </div>
  );
};

