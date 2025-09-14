import "./PostFooter.scss";

type Props = {
  comments: number;
  likes: number;
  onToggleExplanation: () => void;
  isExplanationOpen: boolean;
};

export const PostFooter = ({
  onToggleExplanation,
  isExplanationOpen,
}: Props) => {
  return (
    <div className="post-footer">
      <div className="explanation-button-wrapper">
        <button onClick={onToggleExplanation}>
          {isExplanationOpen ? "閉じる" : "解説を見る"}
        </button>
      </div>
    </div>
  );
};
