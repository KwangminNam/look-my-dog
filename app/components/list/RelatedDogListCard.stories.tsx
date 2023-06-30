import { Meta, StoryObj } from "@storybook/react";
import RelatedDogListCard, { RelatedDogListCardProps } from "./RelatedDogListCard";
import DogListCard from "./DogListCard";
import Container from "../Container";

const meta: Meta<typeof RelatedDogListCard> = {
  title: "list/강아지리스트",
  component: RelatedDogListCard,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof RelatedDogListCard>

const getAllLostDogListing = [
  // mock data for testing
  { id: 1, dogName: "Dog 1", sexCd: "M", filename: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s", desertionNo: 123 },
  { id: 2, dogName: "Dog 2", sexCd: "F", filename: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s", desertionNo: 123},
  { id: 3, dogName: "Dog 3", sexCd: "M", filename: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s", desertionNo: 789 },
  { id: 4, dogName: "Dog 4", sexCd: "F", filename: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s", desertionNo: 101 },
];

const getDogListing = { id: 1, dogType: "Type 1" };


export const RelatedDogList: Story = (args:RelatedDogListCardProps) => {
  return (
    <Container>
      <RelatedDogListCard {...args}/>
    </Container>
  )
}

RelatedDogList.args ={
  title:'다른 유기견 보기',
  dogLabel: '테스트',
  getAllLostDogListing:getAllLostDogListing,
  getDogListing:getDogListing,
}

RelatedDogList.parameters = {
  nextjs: {
    appDirectory: true
  }
};
