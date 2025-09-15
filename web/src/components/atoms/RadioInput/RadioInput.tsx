import "./RadioInput.scss";

type RadioInputProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioInput = ({
  id,
  name,
  value,
  // label,
  checked,
  onChange,
}: RadioInputProps) => {
  return (
    <input
      type="radio"
      id={id || ""}
      name={name || ""}
      value={value || ""}
      checked={checked || false}
      onChange={onChange}
      className="radio-input"
    />
  );
};
