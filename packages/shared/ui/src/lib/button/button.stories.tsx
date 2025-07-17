import type { Meta, StoryObj } from "storybook/internal/types";

import { expect } from "storybook/test";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  argTypes: {
    onClick: { action: "onClick executed!" },
  },
  component: Button,
  title: "Button",
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: "Click Me",
  },
};

export const Heading: Story = {
  args: {
    children: "Click Me",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  },
};
