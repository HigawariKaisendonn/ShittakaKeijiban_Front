"use client";

import { useState, useEffect } from "react";
import { Text } from "@/components/atoms/text/Text";
import { Icon } from "@/components/atoms/icon/Icon";
import { getCurrentUser } from "@/lib/authService";
import "./DashboardHeader.scss";

export const DashboardHeader = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setUsername(user.username);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

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
      <div className="header-right">
        {username && <div className="username">{username}</div>}
      </div>
    </div>
  );
};
