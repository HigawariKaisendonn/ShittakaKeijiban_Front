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
      id: 1,
      genre_id:1,
      user_id:"tako",
      title:"ハリー・ポッターの作者は誰？",
      body:"ハリー・ポッターの作者は誰？",
      explanation:"外国だ",
      created_at:"2202",
      views:22,
      correct_count: 22,
      incorrect_count: 0,
    },
  },
};
