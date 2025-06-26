import "./button.scss";
import classNames from "classnames";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick, variant = "primary"}: ButtonProps) => {
  const buttonClass = classNames("button", {
    "button--primary": variant === "primary",
    "button--secondary": variant === "secondary",
    "button--danger": variant === "danger",
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
