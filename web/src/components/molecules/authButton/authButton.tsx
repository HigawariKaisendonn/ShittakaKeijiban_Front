'use client';
import "./authButton.scss"
import { Button } from "@/components/atoms/button/button"

interface AuthButtonProps {
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
}


export const AuthButton = ({onRegisterClick,onLoginClick}:AuthButtonProps) => {

    return (
        <div className="auth-button">
            <Button variant="primary" onClick={onRegisterClick}>
                新規登録
            </Button>
            <Button variant="secondary" onClick={onLoginClick}>
                サインイン
            </Button>
        </div>
    )
}