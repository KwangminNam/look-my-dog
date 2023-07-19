"use client";

import axios from "axios";
import DogListCard from "../components/list/DogListCard";
import { SafeListing, SafeUser } from "../types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import PageContainer from "../components/PageContainer";

interface MyPostListClinetProps {
  loggedInUser?: SafeUser | null;
  dogList?: SafeListing[];
}

export default function MyPostListClinet({
  loggedInUser,
  dogList
}: MyPostListClinetProps) {
  const [deleteId, setDeleteId] = useState("");
  const router = useRouter();

  const onDelete = (id: string) => {
    axios
      .delete(`/api/listing/${id}`)
      .then(() => {
        toast.success("삭제가 정상적으로 되었습니다.", {
          icon: "🐶"
        });
        router.refresh();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setDeleteId("");
      });
  };

  return (
      <PageContainer>
        {dogList?.map((item) => (
          <DogListCard
            paramsName="listing"
            id={item.id}
            dogName={item.dogName}
            imageSrc={item.imageSrc}
            male={item.male}
            dogType={item.dogType}
            onAction={onDelete}
            disabled={item.id === deleteId}
            key={item.id}
          />
        ))}
      </PageContainer>

  );
}
