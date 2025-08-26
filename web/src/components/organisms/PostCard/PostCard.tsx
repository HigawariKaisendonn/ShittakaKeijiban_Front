import { useState } from "react";
import { ChoiceOption } from "@/components/molecules/ChoiceOption/ChoiceOption";
import { PostFooter } from "@/components/molecules/PostFooter/PostFooter";
import "./post-card.scss";

type Choice = {
  id: string;
  value: string;
  label: string;
  isCorrect: boolean;
};

type Post = {
  id: string;
  question: string;
  choices: Choice[];
  stats: {
    comments: number;
    likes: number;
  };
};

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="post-card">
      <h3>問題</h3>
      <textarea className="question" value={post.question} readOnly />
      <div className="choices">
        {post.choices.slice(0, 4).map((choice) => {
          const isSelected = selectedId === choice.id;
          const showResult = isSelected;
          return (
            <div
              key={choice.id}
              className={
                showResult
                  ? choice.isCorrect
                    ? "correctBg"
                    : "wrongBg"
                  : undefined
              }
            >
              <ChoiceOption
                id={choice.id}
                name={`post-${post.id}`}
                label={choice.label}
                checked={isSelected}
                isSelected={isSelected}
                isCorrect={choice.isCorrect}
                onChange={() => handleSelect(choice.id)}
              />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "auto" }}>
        <PostFooter
          comments={post.stats.comments}
          likes={post.stats.likes}
          onToggleExplanation={() => setShowExplanation(!showExplanation)}
          isExplanationOpen={showExplanation}
        />
      </div>

      {showExplanation && (
        <div className="explanation">
          <p>ここに解説が入ります（仮）</p>
        </div>
      )}
    </div>
  );
};
