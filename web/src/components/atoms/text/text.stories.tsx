import { Meta, StoryObj } from "@storybook/nextjs";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Headline: Story = {
  args: {
    children: "これはヘッドラインです",
    variant: "headline",
  },
};

export const Subtitle: Story = {
  args: {
    children: "これはサブタイトルです",
    variant: "subtitle",
  },
};

export const Body: Story = {
  args: {
    children: "これは本文です",
    variant: "body",
  },
};

export const Caption: Story = {
  args: {
    children: "これはキャプションです",
    variant: "caption",
  },
};