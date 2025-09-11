import { useState } from "react";
import { ChoiceOption } from "@/components/molecules/ChoiceOption/ChoiceOption";
import { PostFooter } from "@/components/molecules/PostFooter/PostFooter";
import "./post-card.scss";

type Choice = {
  id: number;
  question_id: number;
  label: string;
  isCorrect: boolean;
};


// type Post = {
//   id: string;
//   question: string;
//   choices: Choice[];
//   stats: {
//     comments: number;
//     likes: number;
//   };
// };



type Post = {
id: number;
genre_id: number;
user_id: string;
title: string;
body: string;
explanation: string;
created_at: string;
views: number;
correct_count: number;
incorrect_count: number;
};

type Props = {
  post: Post;
  choices: Choice[];
};

export const PostCard = ({ post, choices }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSelect = (id: number) => {
    setSelectedId(id.toString());
  };

  return (
    <div className="post-card">
      <h3>問題</h3>
      <textarea className="question" value={post.body} readOnly />
      <div className="choices">
        {choices.filter(choice => choice.question_id === post.id).slice(0, 4).map((choice) => {
          const isSelected = selectedId === choice.id.toString();
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
          comments={0}
          likes={post.correct_count + post.incorrect_count}
          onToggleExplanation={() => setShowExplanation(!showExplanation)}
          isExplanationOpen={showExplanation}
        />
      </div>

      {showExplanation && (
        <div className="explanation">
          <p>{post.explanation}</p>
        </div>
      )}
    </div>
  );
};
