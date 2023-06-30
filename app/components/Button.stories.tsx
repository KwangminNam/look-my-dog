import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import {Si3M} from 'react-icons/si';


const meta: Meta<typeof Button> = {
  title: "Button/버튼",
  component: Button,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstButton: Story = (args:ButtonProps) => {
  return <Button {...args}/>
}

export const SecondButton: Story = (args:ButtonProps) => {
  return <Button {...args}/>
}


FirstButton.args ={
  borderColor:true,
  label:"제출",
  disabled:true,
  icon:Si3M,
}

SecondButton.args ={
  borderColor:true,
  label:"제출",
  disabled:false,
}