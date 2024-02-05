import { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../components.tsx/MyLabel";

const meta = {
  title: "Example/My Label",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
    allCaps: false,
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom color Label",
    fontColor: "#5517ac",
  },
};
