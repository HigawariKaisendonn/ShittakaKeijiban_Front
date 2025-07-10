'use client';
import "./auth-button.scss"
import { Button } from "@/components/atoms/button/Button";

interface AuthButtonProps {
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
    className?: string;
    disabled?: boolean;
}


export const AuthButton = ({onRegisterClick,onLoginClick,className,disabled}:AuthButtonProps) => {

    return (
        <div className={`auth-button ${className}`}>
            <Button variant="primary" onClick={onRegisterClick} disabled={disabled}>
                新規登録
            </Button>
            <Button variant="secondary" onClick={onLoginClick} disabled={disabled}>
                サインイン
            </Button>
        </div>
    )
}