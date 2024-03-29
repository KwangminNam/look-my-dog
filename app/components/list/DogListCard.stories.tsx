import { Meta, StoryObj } from "@storybook/react";
import DogListCard, { DogListCardProps } from "./DogListCard";
import Container from "../Container";

const meta: Meta<typeof DogListCard> = {
  title: "List/강아지리스트",
  component: DogListCard,
  tags: ["autudocs"]
};

export default meta;
type DeleteType = DogListCardProps
type Story = StoryObj<typeof DogListCard>;

export const Doglist: Story = (args: DogListCardProps[]) => (
  <Container>
    <h2 className="text-center text-3xl">TITLE</h2>
    <div
      className="
      pt-20
      grid-cols-1
      sm:grid-cols-2
      grid
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      md:grid-cols-3
      gap-8"
    >
      {args?.map((item: DogListCardProps) => (
        <DogListCard key={item.id} {...item} />
      ))}
    </div>
  </Container>
);


Doglist.args = 
 [
    {
      id: 1,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "남자",
      paramsName: "list",
      personality: ["good", "bad"],
      showLikeButton:true,
    },
    {
      id: 2,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "남자",
      paramsName: "list",
      personality: ["good", "bad"],
      showLikeButton:true,
    },
    {
      id: 3,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "남자",
      paramsName: "list",
      personality: ["good", "bad"],
      showLikeButton:true,
    },
    {
      id: 4,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "여자",
      paramsName: "list",
      personality: ["good", "bad"],
      showLikeButton:true,
    },
    {
      id: 5,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "여자",
      paramsName: "list",
      personality: ["good", "bad"],
      showLikeButton:true,
    },
    {
      id: 6,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "여자",
      paramsName: "list",
      personality: ["good", "bad"],
    },
    {
      id: 7,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "여자",
      paramsName: "list",
      personality: ["good", "bad"],
    },
    {
      id: 8,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
      dogType: "말티즈",
      dogAge: 30,
      weight: 15,
      dogMonth: "1개월",
      male: "여자",
      paramsName: "list",
      personality: ["good", "bad"],
    },
    // Add more objects here
  ] as any,


Doglist.parameters = {
  nextjs: {
    appDirectory: true
  }
};
