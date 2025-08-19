import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "radio" },
      options: ["correct", "wrong", "default"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Correct: Story = {
  args: {
    label: "正解",
    variant: "correct",
  },
};

export const Wrong: Story = {
  args: {
    label: "不正解",
    variant: "wrong",
  },
};

export const Default: Story = {
  args: {
    label: "情報",
    variant: "default",
  },
};
