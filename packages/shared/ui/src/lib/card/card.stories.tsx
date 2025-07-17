import type { Meta, StoryObj } from "storybook/internal/types";

import { expect } from "storybook/test";

import { Card } from "./card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {
    children: "Card",
  },
};

export const Heading: Story = {
  args: {
    children: "Card",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Welcome to Card!/gi)).toBeTruthy();
  },
};
