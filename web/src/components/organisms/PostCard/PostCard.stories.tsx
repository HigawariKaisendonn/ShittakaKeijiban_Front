import type { Meta, StoryObj } from "@storybook/nextjs";
import { PostCard } from "./PostCard";

const meta: Meta<typeof PostCard> = {
  title: "Organisms/PostCard",
  component: PostCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    post: {
      id: "1",
      question: "ハリー・ポッターの作者は誰？",
      choices: [
        { id: "1", value: "1", label: "J.K.ローリング", isCorrect: true },
        { id: "2", value: "2", label: "村上春樹", isCorrect: false },
        { id: "3", value: "3", label: "東野圭吾", isCorrect: false },
        { id: "4", value: "4", label: "太宰治", isCorrect: false },
      ],
      stats: {
        comments: 12,
        likes: 34,
      },
    },
  },
};
