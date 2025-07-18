"use client";

import { Icon } from "@/components/atoms/icon/Icon";
import { AuthButton } from "@/components/molecules/authButton/AuthButton";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Icon imageUrl="/images/icon.png" className="header-icon" />
        <text className="header-title">
          Pretender
          <br />
          Board
        </text>
      </div>
      <AuthButton disabled={false} />
    </div>
  );
};
