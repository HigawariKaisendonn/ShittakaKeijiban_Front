import classNames from "classnames";
import "./input.scss";

interface InputProps {
  variant?: "default" | "active" | "longtext" | "error" | "disabled";
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ variant = "default", type, placeholder, value, onChange }: InputProps) => {
  const inputClass = classNames("input",{
    "input--default": variant === "default",
    "input--active": variant === "active",
    "input--error": variant === "error",
    "input--disabled": variant === "disabled",
    "input--longtext": variant === "longtext",
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