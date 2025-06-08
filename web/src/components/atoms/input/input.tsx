import "./input.scss";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
  );
};