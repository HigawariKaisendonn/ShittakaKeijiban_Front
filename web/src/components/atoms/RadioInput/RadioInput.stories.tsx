import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioInput } from "./RadioInput";

const meta: Meta<typeof RadioInput> = {
  title: "Atoms/RadioInput",
  component: RadioInput,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioInput>;

export const Default: Story = {
  args: {
    id: "radio1",
    name: "example",
    value: "option1",
    label: "ハリー・ポッターと賢者の石",
    checked: false,
  },
};
