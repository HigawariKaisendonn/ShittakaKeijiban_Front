import "./Badge.scss";
import clsx from "clsx";
import { CheckCircle, XCircle, Info } from "lucide-react";

type BadgeProps = {
  label: string;
  variant?: "correct" | "wrong" | "default";
};

export const Badge = ({ label, variant = "default" }: BadgeProps) => {
  const icon = {
    correct: <CheckCircle size={16} />,
    wrong: <XCircle size={16} />,
    default: <Info size={16} />,
  }[variant];

  return (
    <span className={clsx("badge", variant)}>
      {icon}
      <span className="text">{label}</span>
    </span>
  );
};
