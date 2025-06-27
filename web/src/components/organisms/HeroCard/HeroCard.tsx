import "./hero-card.scss";
import { Text } from "@/components/atoms/text/Text";
import { AuthButton } from "@/components/molecules/authButton/AuthButton";

interface HeroCardProps {
    onRegisterClick?: () => void;
    onLoginClick?: () => void;
};

export const HeroCard = ({ onRegisterClick, onLoginClick }: HeroCardProps) => {
    return (
        <div className="hero-card">
            <Text variant="headline">
                OutPutを恐れるな真の学力向上とはその行いである。
            </Text>
            <div>
                <Text className="hero-card-text" variant="subtitle">知ったかでもいい今から動こう</Text>
                <AuthButton className="hero-card-button" onRegisterClick={onRegisterClick} onLoginClick={onLoginClick} />
            </div>
        </div>
    );
};