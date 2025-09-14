"use client";
import { Button } from "@/components/atoms/button/button";
import { Text } from "@/components/atoms/text/text";
import "./email-verification-popup.scss";

interface EmailVerificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export const EmailVerificationPopup: React.FC<EmailVerificationPopupProps> = ({
  isOpen,
  onClose,
  email
}) => {
  if (!isOpen) return null;

  return (
    <div className="email-verification-popup-overlay" onClick={onClose}>
      <div className="email-verification-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="email-verification-popup-header">
          <Text variant="subtitle">メール認証</Text>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="email-verification-popup-body">
          <div className="verification-icon">
            📧
          </div>
          <Text variant="body" className="verification-message">
            メールアドレスに認証を送信しました。<br />
            メールアドレスを確認してください。
          </Text>
          {email && (
            <Text variant="caption" className="email-address">
              送信先: {email}
            </Text>
          )}
        </div>

        <div className="button-group">
          <Button
            type="button"
            variant="primary"
            onClick={onClose}
          >
            確認
          </Button>
        </div>
      </div>
    </div>
  );
};