"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Next.js App Router用
import "./auth-form.scss";
import apiClient from "@/lib/apiClient";
import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/input";
import { Text } from "@/components/atoms/text/text";
import { worker } from "@/mocks/browser";

export const AuthForm: React.FC = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  /**
   * MSWのワーカーを開発環境でのみ起動
   * 本番環境ではAPIは実際のサーバーに接続されるため、
   * MSWは使用しない
   */
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      worker.start();
    }
  }, []);
  /**
   * モードに応じて新規登録とログインの状態を切り替える
   * 初期状態は新規登録モード
   */
  const [isSignUp, setIsSignUp] = useState(mode === "register");
  useEffect(() => {
    if (mode === "register") {
      setIsSignUp(true);
    } else if (mode === "login") {
      setIsSignUp(false);
    }
  }, [mode]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const router = useRouter();

  const handleSignUp = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("パスワードが一致しません");
        return;
      }
      try {
        const response = await apiClient.post("/auth/signup", {
          username,
          email,
          password,
        });

        const { token } = response.data;

        localStorage.setItem("access_token", token);
        router.push("/dashboard");
      } catch (error) {
        console.error("新規登録失敗", error);
      }
    },
    [password, confirmPassword, username, email, router]
  );

  const handleSignIn = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await apiClient.post("/auth/login", {
          email: loginEmail,
          password: loginPassword,
        });

        const { token } = response.data; // バックエンドがこの形式で返す前提

        // トークンを保存（必要に応じてcookieでもOK）
        localStorage.setItem("access_token", token);

        // ダッシュボードにリダイレクト
        router.push("/dashboard");
      } catch (error) {
        console.error("ログイン失敗", error);
        alert("ログインに失敗しました");
      }
    },
    [loginEmail, loginPassword, router]
  );

  return (
    <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
      <div className="form-container sign-up-container">
        <form style={{ textAlign: "center" }} onSubmit={handleSignUp}>
          <Text variant="headline">新規登録</Text>
          <Input
            type="text"
            placeholder="ニックネーム"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={"default"}
          />
          <Input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={"default"}
          />
          <Input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={"default"}
          />
          <Input
            type="password"
            placeholder="再パスワード"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={"default"}
          />
          <Button variant="secondary" type="submit">
            新規登録
          </Button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form style={{ textAlign: "center" }} onSubmit={handleSignIn}>
          <Text variant="headline">サインイン</Text>
          <Text variant="body" className="address-label">
            メールアドレス
          </Text>
          <Input
            type="email"
            placeholder="メールアドレス"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className={"default"}
          />
          <Text variant="body" className="password-label">
            パスワード
          </Text>
          <Input
            type="password"
            placeholder="パスワード"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className={"default"}
          />

          <Button variant="primary" type="submit">
            サインイン
          </Button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <Text variant="headline">おかえりなさい！</Text>
            <Text variant="body">
              アカウントをお持ちの方は
              <br />
              こちらからサインインしてください
            </Text>
            <Button variant="primary" onClick={() => setIsSignUp(false)}>
              サインインを行う
            </Button>
          </div>
          <div className="overlay-panel overlay-right">
            <Text variant="headline">こんにちは！</Text>
            <Text variant="body">初めての方はこちらから新規登録を行えます</Text>
            <Button variant="secondary" onClick={() => setIsSignUp(true)}>
              新規登録を行う
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
