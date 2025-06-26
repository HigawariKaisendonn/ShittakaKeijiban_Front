import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "active", "disabled", "error", "longtext"],
    },
    placeholder: { control: "text" },
    type: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "デフォルト入力",
    type: "text",
    value: "",
  },
};

export const Active: Story = {
  args: {
    variant: "active",
    placeholder: "フォーカス中の入力",
    type: "text",
    value: "",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    placeholder: "エラー入力",
    type: "text",
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    placeholder: "入力不可",
    type: "text",
    value: "",
  },
};

export const Longtext: Story = {
  args: {
    variant: "longtext",
    placeholder: "長文入力エリア",
    type: "text",
    value: "",
  },
};