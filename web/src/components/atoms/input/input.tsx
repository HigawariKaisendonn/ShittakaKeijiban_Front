import classNames from "classnames";
import "./input.scss";

interface InputProps {
  variant?: "default" | "outline" | "filled" | "error" | "disabled";
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ variant = "default", type, placeholder, value, onChange }: InputProps) => {
  const inputClass = classNames("input",{
    "input--default": variant === "default",
    "input--outline": variant === "outline",
    "input--filled": variant === "filled",
    "input--error": variant === "error",
    "input--disabled": variant === "disabled",
  });
  return (
    <input
    className={inputClass}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
  </input>
  );
};