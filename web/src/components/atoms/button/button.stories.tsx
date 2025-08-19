import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "新規登録",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "サインイン",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    children: "削除",
    variant: "danger",
  },
};
