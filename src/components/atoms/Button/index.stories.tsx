import { Meta, StoryFn } from "@storybook/react";
import Button from ".";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
      description: "ボタンバリアント",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "ボタンテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Disabledフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    width: {
      control: { type: "number" },
      description: "横幅",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "縦幅",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "onClickイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

//プライマリボタン
export const Primary = Template.bind({});
Primary.args = { variant: "primary", children: "Primary Button" };

//セカンダリボタン
export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary", children: "Secondry Button" };

//無効化ボタン
export const Disabled = Template.bind({});
Disabled.args = { disabled: true, children: "Disabled Button" };
