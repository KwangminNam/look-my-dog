"use client";

import axios from "axios";
import Container from "../components/Container";
import DogListCard from "../components/list/DogListCard";
import { SafeListing, SafeUser } from "../types";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

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
        toast.success("삭제가 정상적으로 되었습니다.");
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
    <Container>
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
         "
      >
        {dogList?.map((item) => (
          <DogListCard
            paramsName="listing"
            id={item.id}
            imageSrc={item.imageSrc}
            male={item.male}
            dogType={item.dogType}
            onAction={onDelete}
            disabled={item.id === deleteId}
          />
        ))}
      </div>
    </Container>
  );
}
