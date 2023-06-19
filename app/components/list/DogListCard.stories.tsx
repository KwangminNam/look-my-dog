import { Meta, StoryObj } from "@storybook/react";
import DogListCard, { DogListCardProps } from "./DogListCard";

const meta: Meta<typeof DogListCard> = {
  title: "Example/강아지리스트",
  component: DogListCard,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof DogListCard>;

export const Another: Story = {
  args: {
    id: 1,
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
    dogType: "말티즈",
    dogAge: 30,
    weight: 15,
    dogMonth: "1개월",
    male: "여자",
    paramsName: "list",
    personality: ["good", "bad"]
  },
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  render: (args) => <div className="grid grid-cols-6"> <DogListCard {...args} /></div>
};
