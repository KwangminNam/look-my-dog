"use client";

import AgeCounter from "@/app/components/AgeCounter";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import ImageUpload from "@/app/components/ImageUpload";
import Input from "@/app/components/Input/Input";
import PostDogInput from "@/app/components/Input/PostDogInput";
import SelectPersonality from "@/app/components/Input/SelectPersonality";
import SelectSex from "@/app/components/Input/SelectSex";
import { TYPE_OF_DOG } from "@/app/components/TypeDogs";
import {
  MALE_DATA,
  PERSONALTY_DATA
} from "@/app/components/modal/PostmyDogModal";
import { SafeListing, SafeUser } from "@/app/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { GiFemale, GiMale } from "react-icons/gi";

interface ListingClientProps {
  dogList: (SafeListing & { user: SafeUser }) | any;
  loggedInUser: SafeUser | null;
  allDogList: SafeListing | any;
}

export default function EditClient({
  dogList,
  loggedInUser,
  allDogList
}: ListingClientProps) {
  console.log(dogList);
  console.log(allDogList);

  const defaultPersonality = dogList.personality.map((item: any) => item);
  const [editId, setEditId] = useState("");

  const {
    watch,
    setValue,
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    // resolver: zodResolver(validation),
    defaultValues: {
      dogType: dogList.dogType,
      dogAge: dogList.dogAge,
      male: dogList.male,
      imageSrc: dogList.imageSrc,
      personality: defaultPersonality,
      dogMonth: dogList.dogMonth,
      dogName: dogList.dogName,
      weight: dogList.weight,
      desc: dogList.desc
    }
  });

  const date = new Date(dogList.createdAt);

  const setCustumValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    });
  };

  const selectPersonalityFn = (value: string) => {
    const newPersonality = [...personality];
    const index = newPersonality.indexOf(value);
    console.log(index);
    if (index > -1) {
      newPersonality.splice(index, 1);
    } else {
      newPersonality.push(value);
    }
    setCustumValue("personality", newPersonality);
  };

  const selectDogType = (value: string) => {
    setCustumValue("dogType", value);
  };

  const selectMaleType = (value: string) => {
    setCustumValue("male", value);
  };

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  const personality = watch("personality") || [];
  const dogAge = watch("dogAge");
  const monthValue = watch("dogMonth");
  const dogType = watch("dogType");
  const imageSrc = watch("imageSrc");
  const male = watch("male");

  const router = useRouter();

  const onEdit = (data?: any, id?: string) => {
    axios
      .post(`/api/edit/${id}`, data)
      .then(() => {
        router.refresh();
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setEditId("");
      });
  };
  const onFormSubmit = async (data: any) => {
    try {
      onEdit(data, dogList.id);
      toast.success("수정이 완료 되었습니다!");
      router.push(`/listing/${dogList.id}`);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex-col">
          <div className="flex justify-center">
            <ImageUpload
              value={imageSrc}
              onChange={(value) => setCustumValue("imageSrc", value)}
            />
          </div>
          <div className="md:w-[750px] m-auto">
            <div className="py-7 md:flex md:flex-row justify-between items-center flex-col">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={dogList.user?.image || "/images/userPlaceholder.jpg"}
                  alt="사용자"
                  width={50}
                  height={50}
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  placeholder="blur"
                />
                <span>{dogList.user.name || dogList.user.email}</span>
              </div>
              <span>게시글 등록날짜:{formattedDate}</span>
            </div>
            <div className="py-11 border-y-2 border-neutral-200 mb-10">
              <ul className="grid grid-cols-2 gap-4 max-h-[480px] overflow-y-scroll p-4">
                {TYPE_OF_DOG.map((item) => (
                  <PostDogInput
                    label={item.label}
                    src={item.src}
                    selected={dogType === item.label}
                    onClick={selectDogType}
                    key={item.label}
                  />
                ))}
              </ul>
              <div className="text-4xl flex items-center gap-3">
                {/* <input type="text" defaultValue={dogList.dogName} /> */}
                <Input
                  id="dogName"
                  register={register}
                  errors={errors}
                  label="강아지이름"
                />
                <Input
                  id="weight"
                  type="number"
                  register={register}
                  errors={errors}
                  label="몸무게"
                  formatWeight
                  min={0}
                />
              </div>

              <div className="flex gap-2 md:gap-0 justify-center">
                {MALE_DATA.map((item) => (
                  <SelectSex
                    onClick={selectMaleType}
                    key={item.male}
                    value={item.male}
                    selected={male === item.male}
                  />
                ))}
              </div>
              <AgeCounter
                value={dogAge}
                showMonth={monthValue}
                onMonthChange={(month) => setCustumValue("dogMonth", month)}
                onChange={(age) => setCustumValue("dogAge", age)}
              />
              <div className="my-10">
                <h3 className="text-xl">성격</h3>
                <ul className="flex flex-col gap-2 mb-5 max-h-[364px] overflow-y-scroll">
                  {PERSONALTY_DATA.map((item) => (
                    <SelectPersonality
                      selected={personality}
                      value={item.personlityDog}
                      onClick={selectPersonalityFn}
                      key={item.personlityDog}
                    />
                  ))}
                </ul>
                {/* <ul className="mt-3 mb-8 md:flex gap-2">
                  {dogList.personality.map((item: any) => (
                    <li
                      key={item}
                      className="w-full mb-2 text-center rounded-xl py-3 border-2 border-neutral-300"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul> */}
              </div>

              <div className="text-2xl text-stone-500 mb-7">
                <Input
                  id="desc"
                  register={register}
                  errors={errors}
                  label="내용"
                />
              </div>
              <Button
                onClick={handleSubmit(onFormSubmit)}
                label="수정하기"
                disabled={dogList.id === editId}
              />
            </div>
            {/* Reletated DogType */}
          </div>
        </div>
      </div>
    </Container>
  );
}
