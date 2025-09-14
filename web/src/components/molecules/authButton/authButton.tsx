"use client";

import "./auth-Button.scss";
import { Button } from "@/components/atoms/button/button";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
  className?: string;
  disabled?: boolean;
}

export const AuthButton = ({ className, disabled }: AuthButtonProps) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth?mode=login");
  };

  const handleRegister = () => {
    router.push("/auth?mode=register");
  };

  return (
    <div className={`auth-button ${className}`}>
      <Button variant="primary" onClick={handleLogin} disabled={disabled}>
        サインイン
      </Button>
      <Button variant="secondary" onClick={handleRegister} disabled={disabled}>
        新規登録
      </Button>
    </div>
  );
};
