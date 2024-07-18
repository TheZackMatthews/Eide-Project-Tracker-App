import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ImpactBox } from "./ImpactBox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "kanban/atoms/PriorityBadge",
  component: ImpactBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof ImpactBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Low: Story = {
  args: {
    level: "low",
  },
};

export const Medium: Story = {
  args: {
    level: "medium",
  },
};

export const High: Story = {
  args: {
    level: "high",
  },
};

export const Critical: Story = {
  args: {
    level: "critical",
  },
};

export const Internal: Story = {
  args: {
    level: "internal",
  },
};
