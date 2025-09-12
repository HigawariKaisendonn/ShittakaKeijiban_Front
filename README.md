# 📚 しったか掲示板 - 技術スタック

## 🖥️ フロントエンド

- **Next.js** - React ベースのフルスタックフレームワーク
- **TypeScript** - 型安全な JavaScript
- **SCSS (CSS Modules)** - スタイル管理
- **Atomic Design** - コンポーネント設計指針
- **Lucide-react** - アイコンライブラリ
- **Axios** または **Fetch API** - API 通信
- **Swagger** - API ドキュメント / 仕様管理

## 🛠️ 開発支援・品質向上

- **ESLint** - 静的コード解析・コード品質チェック
- **Prettier** - コードフォーマット整形
- **Storybook** - UI コンポーネントカタログ / ドキュメント化

## 🚀 デプロイ・ホスティング

- **Vercel** - Next.js 公式推奨のデプロイプラットフォーム（GitHub 連携による CI/CD 自動化対応）

---

## 📌 全体まとめ（一覧）

| カテゴリ               | ツール・技術 |
|------------------------|---------------|
| フレームワーク         | Next.js |
| 言語・型               | TypeScript |
| スタイリング           | SCSS（CSS Modules） |
| コンポーネント設計     | Atomic Design |
| アイコン               | Lucide |
| API 通信               | Axios / Fetch |
| API 仕様管理           | Swagger |
| コード品質             | ESLint / Prettier |
| UI カタログ             | Storybook |
| デプロイ・ホスティング | Vercel |

---

## 📝 補足メモ

- **SCSS** は Atomic Design に合わせ、各コンポーネント単位で `*.module.scss` 形式で管理  
- **Storybook** を活用し、デザインの一貫性確認と UI カタログを作成予定  
- **Lucide** は軽量かつモダンな UI に適したアイコンライブラリ  
- **Swagger** により API 仕様をチーム間で共有・整合性確認  

---

## 🚀 起動コマンド

```bash
# プロジェクトルートで以下を実行
cd web

## 依存関係などのインストール(初回)
npm install

# (推奨) 開発サーバー起動
npm run dev
# または
pnpm run dev
