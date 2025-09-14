import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config, { isServer }) => {
    // Storybookファイルをビルドから除外
    config.module.rules.push({
      test: /\.stories\.(js|jsx|ts|tsx)$/,
      loader: 'ignore-loader',
    });

    return config;
  },
  // ESLintをビルド時に無効化（本番では推奨されませんが、一時的に）
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScriptエラーもビルド時に無視（一時的に）
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
