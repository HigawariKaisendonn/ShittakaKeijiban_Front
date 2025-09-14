"use client";

import { Icon } from "@/components/atoms/icon/icon";
import { AuthButton } from "@/components/molecules/authButton/authButton";
import "./WelcomeHeader.scss";

export const WelcomeHeader = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Icon imageUrl="/images/icon.png" className="header-icon" />
        <div className="header-title">
          Pretender
          <br />
          Board
        </div>
      </div>
      <AuthButton disabled={false} />
    </div>
  );
};
