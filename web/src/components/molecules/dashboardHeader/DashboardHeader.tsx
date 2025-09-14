"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { Text } from "@/components/atoms/text/text";
import { Icon } from "@/components/atoms/icon/icon";
import { Button } from "@/components/atoms/button/button";
import { getCurrentUser, logout } from "@/lib/authService";
import "./DashboardHeader.scss";

export const DashboardHeader = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setUsername(user.username);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        // エラーハンドリング: 例えばログインページにリダイレクトする
        router.push("/auth");
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/auth");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

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
        <Button onClick={handleLogout} variant="danger">
          ログアウト
        </Button>
      </div>
    </div>
  );
};
