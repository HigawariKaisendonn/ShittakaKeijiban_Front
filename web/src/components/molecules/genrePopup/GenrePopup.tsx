"use client";
import { useState } from "react";
import { Button } from "@/components/atoms/button/button";
import { Text } from "@/components/atoms/text/text";
import "./genre-popup.scss";

interface GenrePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGenre: (genreName: string) => Promise<void>;
}

export const GenrePopup: React.FC<GenrePopupProps> = ({
  isOpen,
  onClose,
  onAddGenre
}) => {
  const [newGenreName, setNewGenreName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGenreName.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await onAddGenre(newGenreName.trim());
      setNewGenreName("");
      onClose();
    } catch (error) {
      console.error(error);
      setError("ジャンルの追加に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setNewGenreName("");
    setError(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="genre-popup-overlay" onClick={handleClose}>
      <div className="genre-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="genre-popup-header">
          <Text variant="subtitle">新しいジャンルを追加</Text>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="genre-popup-form">
          {error && (
            <div className="error-message">{error}</div>
          )}

          <input
            type="text"
            value={newGenreName}
            onChange={(e) => setNewGenreName(e.target.value)}
            placeholder="ジャンル名を入力してください"
            className="genre-input"
            disabled={isSubmitting}
            autoFocus
          />

          <div className="button-group">
            <Button
              type="button"
              variant="secondary"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={!newGenreName.trim() || isSubmitting}
            >
              {isSubmitting ? "追加中..." : "追加"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};