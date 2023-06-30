import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";
import { useForm } from 'react-hook-form';



const meta: Meta<typeof Input> = {
  title: "Input/인풋",
  component: Input,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Inputt: Story = (args:InputProps) => {
  const { register } = useForm(); 
  return <Input {...args} register={register}/>
}

Inputt.args ={
  id:'id',
  label:"라벨입니다",
  register:"test" as any
}