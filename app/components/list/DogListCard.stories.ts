import { Meta, StoryObj } from "@storybook/react";
import DogListCard, { DogListCardProps } from "./DogListCard";
import { DogListing } from "@prisma/client";

const meta: Meta<typeof DogListCard> = {
  title:"Example/강아지리스트",
  component:DogListCard
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base:Story ={
  args:{
    id:1,
    imageSrc:"http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjpu5wcks%2Fimage%2Fupload%2Fv1686926610%2Fzkpotcvflkprcwe22jst.png&w=3840&q=75",
    dogType:"말티즈",
    dogAge:30,
    weight:15,
    dogMonth:"1개월",
    male:"여자",
    paramsName:"list",
    personality:['good','bad']
  },
  parameters:{
    nextjs:{
      appDirectory: true,
    }
  },
}

export const Another:Story = {
  args:{
    id:1,
    imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx-by4e5r6kDq59HyeRElGTd00oMFr-duASxN8UKnsQ&s",
    dogType:"말티즈",
    dogAge:30,
    weight:15,
    dogMonth:"1개월",
    male:"여자",
    paramsName:"list",
    personality:['good','bad']
  },
  parameters:{
    nextjs:{
      appDirectory: true,
    }
  },
}