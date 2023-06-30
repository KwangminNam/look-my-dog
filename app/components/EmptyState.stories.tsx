import { Meta, StoryObj } from "@storybook/react";
import EmptyState, { EmptyStateProps } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "EmptyState/ 엠티",
  component: EmptyState,
  tags: ["autudocs"]
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const PrimaryEmptyState : Story = (arg:EmptyStateProps) => {
  return <EmptyState {...arg}/>
}

PrimaryEmptyState.args ={
  title:'텅 비었습니다.',
  showButton:true,
}
