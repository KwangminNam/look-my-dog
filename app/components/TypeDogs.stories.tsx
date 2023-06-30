import { Meta, StoryObj } from "@storybook/react";
import TypeDogs, { TYPE_OF_DOG } from "./TypeDogs";


const meta: Meta<typeof TypeDogs> = {
  title: "Type of Dog/ 강아지 종류",
  component: TypeDogs,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof TypeDogs>;

export const TypeOfDogs: Story = (arg:any) => {
  return <TypeDogs />
}

TypeOfDogs.args ={
  
}

TypeOfDogs.parameters = {
  nextjs: {
    appDirectory: true
  }
};