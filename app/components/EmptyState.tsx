'use client';

import usePostModal from "../hooks/usePostModal";
import Button from "./Button";
import Container from "./Container";
import { SiDatadog } from "react-icons/si";

export default function EmptyState() {

  const postModal = usePostModal();

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <SiDatadog size={250} />
        <p className="text-3xl mb-3">강아지 정보가 없습니다.</p>
        <Button label="내 강아지 자랑하기" onClick={postModal.actionOpen} borderColor halfWidth />
      </div>
    </Container>
  );
}
