'use client';
import "./auth-button.scss"
import { Button } from "@/components/atoms/button/Button";

interface AuthButtonProps {
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
    className?: string;
}


export const AuthButton = ({onRegisterClick,onLoginClick,className}:AuthButtonProps) => {

    return (
        <div className={`auth-button ${className}`}>
            <Button variant="primary" onClick={onRegisterClick}>
                新規登録
            </Button>
            <Button variant="secondary" onClick={onLoginClick}>
                サインイン
            </Button>
        </div>
    )
}