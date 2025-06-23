import "./authButton.scss"
import { Button } from "@/components/atoms/button/button"

// interface AuthButtonProps {}


export const AuthButton = () => {

    return (
        <div className="auth-button">
            <Button variant="primary" onClick={() => {console.log("新規登録ボタンがクリックされました")}}>
                新規登録
            </Button>
            <Button variant="secondary" onClick={() => {console.log("ログインボタンがクリックされました")}}>
                ログイン
            </Button>
        </div>
    )
}