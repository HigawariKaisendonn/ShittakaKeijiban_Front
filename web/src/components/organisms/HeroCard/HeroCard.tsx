"use client";
import "./hero-card.scss";
import { Text } from "@/components/atoms/text/Text";
import { AuthButton } from "@/components/molecules/authButton/AuthButton";

export const HeroCard = () => {
  return (
    <div className="hero-card">
      <Text className="hero-card-headline" variant="headline">
        OutPutを恐れるな
        <br />
        真の学力向上とはその行いである。
      </Text>
      <Text className="hero-card-text" variant="subtitle">
        知ったかでもいい今から動こう。
      </Text>
      <div className="hero-card-button">
        <AuthButton />
      </div>
    </div>
  );
};
