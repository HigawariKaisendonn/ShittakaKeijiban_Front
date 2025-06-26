import "./button.scss";
import classNames from "classnames";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export const Button = ({ children, onClick, variant = "primary", className }: ButtonProps) => {
  const buttonClass = classNames("button", {
    "button--primary": variant === "primary",
    "button--secondary": variant === "secondary",
    "button--danger": variant === "danger",
  },
  className);
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
