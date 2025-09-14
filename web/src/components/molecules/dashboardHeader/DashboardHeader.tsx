"use client";

import { Text } from "@/components/atoms/text/Text";
import { Icon } from "@/components/atoms/icon/Icon";
import "./DashboardHeader.scss";

export const DashboardHeader = () => {
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
    </div>
  );
};
