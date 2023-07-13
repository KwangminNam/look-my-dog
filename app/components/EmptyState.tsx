"use client";

import { ReactElement } from "react";
import usePostModal from "../hooks/usePostModal";
import Button from "./Button";
import Container from "./Container";
import { SiDatadog } from "react-icons/si";
import getLoggedInUser from "../actions/getLoginedUser";
import { SafeUser } from "../types";
import useLoginModal from "../hooks/useLoginModal";

export interface EmptyStateProps {
  title: string | ReactElement;
  showButton?: boolean;
  loggedInUser?:SafeUser | null;
}

export default function EmptyState({
  title,
  showButton = false,
  loggedInUser
}: EmptyStateProps) {
  
  const postModal = usePostModal();
  const loginModal = useLoginModal();

  const onOpenPostModal = () => {
    if (!loggedInUser) {
      return loginModal.actionOpen();
    }
    postModal.actionOpen();
  };


  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <SiDatadog size={250} color="green" />
        <p className="text-3xl mb-3">{title}</p>
        {showButton && (
          <Button
            label="내 강아지 자랑하기"
            onClick={onOpenPostModal}
            borderColor
            halfWidth
          />
        )}
      </div>
    </Container>
  );
}
