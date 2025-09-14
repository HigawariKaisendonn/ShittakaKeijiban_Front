import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChoiceOption } from "./ChoiceOption";

const meta: Meta<typeof ChoiceOption> = {
  title: "Molecules/ChoiceOption",
  component: ChoiceOption,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    label: { control: "text" },
    checked: { control: "boolean" },
    isCorrect: { control: "boolean" },
    isSelected: { control: "boolean" },
    onChange: { action: "onChange" },
  },
};

export default meta;
type Story = StoryObj<typeof ChoiceOption>;

export const Default: Story = {
  args: {
    id: 1,
    name: "question1",
    label: "ハリー・ポッターと賢者の石",
    checked: false,
    isCorrect: false,
    isSelected: false,
  },
};

export const SelectedCorrect: Story = {
  args: {
    id: 2,
    name: "question1",
    label: "ハリー・ポッターと賢者の石",
    checked: true,
    isCorrect: true,
    isSelected: true,
  },
};

export const SelectedWrong: Story = {
  args: {
    id: 3,
    name: "question1",
    label: "ハリー・ポッターと賢者の石",
    checked: true,
    isCorrect: false,
    isSelected: true,
  },
};
