import classNames from "classnames";
import "./text.scss";

interface TextProps {
  children: React.ReactNode;
  variant?: "headline" | "subtitle" | "body" | "caption";
  className?: string;
}

export const Text = ({ children, variant = "body", className = "" }: TextProps) => {
  const textClass = classNames("text", {
    "text--headline": variant === "headline",
    "text--subtitle": variant === "subtitle",
    "text--body": variant === "body",
    "text--caption": variant === "caption",
  });

  return <p className={`${textClass} ${className}`}>{children}</p>;
};