import "./PostFooter.scss";

type Props = {
  comments: number;
  likes: number;
  onToggleExplanation: () => void;
  isExplanationOpen: boolean;
};

export const PostFooter = ({
  comments,
  likes,
  onToggleExplanation,
  isExplanationOpen,
}: Props) => {
  return (
    <div className="post-footer">
      <span>💬 {comments}</span>
      <span>❤️ {likes}</span>
      <div className="explanation-button-wrapper">
        <button onClick={onToggleExplanation}>
          {isExplanationOpen ? "閉じる" : "解説を見る"}
        </button>
      </div>
    </div>
  );
};
