"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import qs from "query-string";
import Image from "next/image";
import { MALE_DATA } from "./PostmyDogModal";
import SelectSex from "../Input/SelectSex";
import AgeCounter from "../AgeCounter";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";

export default function SearchModal() {
  const searchModal = useSearchModal();
  const router = useRouter();
  const params = useParams();

  const {
    watch,
    register,
    formState: { errors }
  } = useForm();

  const dogName = watch("dogName");
  const [dogAge, setDogAge] = useState(1);
  const [male, setMale] = useState("남자");



  const onSubmit = async () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      dogAge: dogAge,
      dogName: encodeURIComponent(dogName),
      male: encodeURIComponent(male)
    };
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery
      },
      { skipNull: true }
    );
    searchModal.actionClose();
      
    // 최종 라우터 푸쉬
    router.push(url);
  };

  const selectSexType = (value: string) => {
    setMale(value);
  };

  const bodyModal = (
    <>
      <div className="flex justify-center items-center mb-4">
        <Input
          id="dogName"
          errors={errors}
          label="강아지 이름 입력해주세요"
          register={register}
        />
      </div>
      <div className="flex-col flex items-center">
        <div className="mt-4 flex py-6 w-full justify-between border-t border-b border-solid border-neutral-300">
          <span className="text-lg md:text-2xl">성별을 골라주세요</span>
          <div className="flex">
            {MALE_DATA.map((item) => (
              <SelectSex
                onClick={selectSexType}
                key={item.male}
                value={item.male}
                selected={male === item.male}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex pt-6 w-full justify-between">
          <span className="text-lg md:text-2xl">강아지의 나이는 몇살인가요?</span>
          <AgeCounter
            value={dogAge}
            onChange={(age) => setDogAge(age)}
            onMonthChange={() => {}}
            renderSelctMonth={false}
          />
        </div>
      </div>
    </>
  );

  return (
    <Modal
      isOpen={searchModal.isOpen}
      closeAction={searchModal.actionClose}
      actionLabel="검색하기"
      title="검색 할 정보 입력해주세요."
      actionOnclick={onSubmit}
      bodyContent={bodyModal}
    />
  );
}
