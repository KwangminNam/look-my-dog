"use client";

import { ReactElement } from "react";
import usePostModal from "../hooks/usePostModal";
import Button from "./Button";
import Container from "./Container";
import { SiDatadog } from "react-icons/si";

export interface EmptyStateProps {
  title: string | ReactElement;
  showButton?: boolean;
}

export default function EmptyState({
  title,
  showButton = false
}: EmptyStateProps) {
  const postModal = usePostModal();

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <SiDatadog size={250} color="green" />
        <p className="text-3xl mb-3">{title}</p>
        {showButton && (
          <Button
            label="내 강아지 자랑하기"
            onClick={postModal.actionOpen}
            borderColor
            halfWidth
          />
        )}
      </div>
    </Container>
  );
}
