# プロジェクト雛形作成ログ

## 技術スタック

- **Next.js** (app router / React 18+)
- **TypeScript**
- **Tailwind CSS**
- **ESLint / Prettier**
- **Atomic Design**
    - Atoms / Molecules / Organisms / Templates
- **Vercel デプロイ予定**

---

## 雛形作成手順

### 1️⃣ Next.js プロジェクト作成

```bash
npx create-next-app@latest my-app --typescript --eslint --tailwind
```

### 2️⃣ セットアップ時の選択内容

```text
✔ Would you like to use TypeScript? › Yes
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like to use src/ directory? › Yes
✔ Would you like to use experimental app/ directory with React Server Components? › Yes
✔ Would you like to customize the default import alias (@/*)? › No
```

### 3️⃣ Atomic Design ディレクトリ作成

## ディレクトリ構成

/src/app/components
  /atoms
  /molecules
  /organisms
  /templates

## 作成コマンド

```bash
mkdir -p src/app/components/atoms
mkdir -p src/app/components/molecules
mkdir -p src/app/components/organisms
mkdir -p src/app/components/templates
```

## 雛形作成 完了 ✅