import classNames from "classnames";
import "./input.scss";

type InputVariant = "default" | "active" | "longtext" | "error" | "disabled";

interface InputProps {
  variant?: InputVariant;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({ variant = "default", type, placeholder, value, onChange, className }: InputProps) => {
  const inputClass = classNames("input",{
    "input--default": variant === "default",
    "input--active": variant === "active",
    "input--error": variant === "error",
    "input--disabled": variant === "disabled",
    "input--longtext": variant === "longtext",
  },
  className);
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