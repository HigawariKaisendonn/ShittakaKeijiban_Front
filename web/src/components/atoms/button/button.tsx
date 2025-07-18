import "./button.scss";
import classNames from "classnames";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, variant = "primary", className, disabled, type = "button" }: ButtonProps) => {
  const buttonClass = classNames("button", {
    "button--primary": variant === "primary",
    "button--secondary": variant === "secondary",
    "button--danger": variant === "danger",
  },
  className);
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
