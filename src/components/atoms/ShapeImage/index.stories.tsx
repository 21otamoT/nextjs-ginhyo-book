import { Meta, StoryFn } from "@storybook/react";
import Button from ".";
import ShapeImage from ".";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Button> = {
  title: "Atoms/ShapeImage",
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: { type: "radio" },
      defaultValue: "square",
      description: "ボタンの形",
      table: {
        type: { summary: "circle | square" },
        defaultValue: { summary: "square" },
      },
    },
    src: {
      control: { type: "text" },
      defaultValue: "画像URL",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: { type: "number" },
      defaultValue: 320,
      description: "横幅",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: { type: "number" },
      description: "縦幅",
      defaultValue: 320,
      table: {
        type: { summary: "number" },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof ShapeImage> = (args) => <ShapeImage {...args} />;

// 円形
export const Circle = Template.bind({});
Circle.args = { src: "/images/sample/1.jpg", shape: "circle" };

// 四角形
export const Square = Template.bind({});
Square.args = { src: "/images/sample/1.jpg", shape: "square" };
