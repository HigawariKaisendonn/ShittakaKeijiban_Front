import { Badge } from "@/components/atoms/badge/Badge";
import { RadioInput } from "@/components/atoms/RadioInput/RadioInput";
import "./choice-option.scss";

interface ChoiceOptionProps {
  id: number;
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  isCorrect?: boolean;
  isSelected?: boolean;
}

export const ChoiceOption = ({
  id,
  name,
  label,
  checked,
  onChange,
  isCorrect = false,
  isSelected = false,
}: ChoiceOptionProps) => {
  return (
    <label className="choice-option">
      <RadioInput
        id={id.toString()}
        name={name}
        value={id.toString()}
        checked={checked}
        onChange={onChange}
        label={label}
      />
      <span className="label">{label || ""}</span>
      {isSelected && (
        <Badge
          label={isCorrect ? "正解" : "不正解"}
          variant={isCorrect ? "correct" : "wrong"}
        />
      )}
    </label>
  );
};
