"use client";

import AgeCounter from "@/app/components/AgeCounter";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
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
import { DogListing } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


interface ListingClientProps {
  dogList: (SafeListing & { user: SafeUser }) | null | undefined;
  loggedInUser: SafeUser | null;
}

type DogListingWithModifiedProps = Omit<DogListing, "id" | "createdAt"> & {
  dogMonth: { month: string | null } | null;
};

export default function EditClient({
  dogList,
}: ListingClientProps) {

  if(!dogList){
    return <EmptyState  title='상세 페이지가 존재 하지않습니다.'/>
  }

  const defaultPersonality = dogList.personality.map((item: any) => item);
  const [editId, setEditId] = useState("");


  const {
    watch,
    setValue,
    register,
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
  const personality = watch("personality") || [];
  const dogAge = watch("dogAge");
  const monthValue = watch("dogMonth");
  const dogType = watch("dogType");
  const imageSrc = watch("imageSrc");
  const male = watch("male");
  const router = useRouter();

  console.log(monthValue);
  console.log(dogList.dogMonth)

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


  const onEdit = (data?: DogListingWithModifiedProps, id?: string) => {
    console.log(data);
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
          <div className="flex justify-center m,">
            <ImageUpload
              editPage
              value={imageSrc}
              onChange={(value) => setCustumValue("imageSrc", value)}
            />
          </div>
          <p className="text-center">이미지를 수정하시려면 사진을 클릭해주세요!</p>
          <div className="md:w-[750px] m-auto">
            <div className="py-11">
              <h3 className="text-lg md:text-2xl">강아지 종류</h3>
              <ul className="border-2 border-neutral-200 rounded-lg grid grid-cols-2 gap-4 max-h-[480px] overflow-y-scroll p-4">
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
              <div className="my-14">
                <h3 className="text-lg md:text-2xl">강아지 정보</h3>
                <div className="text-4xl flex items-center gap-3">
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
                <div className="flex flex-col md:flex-row justify-between mt-7 items-center gap-4">
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
                </div>
              </div>
              <div className="my-14">
                <h3 className="text-lg md:text-2xl">성격</h3>
                <ul className="border-2 border-neutral-200 p-4 rounded-lg flex flex-col gap-2 mb-5 max-h-[364px] overflow-y-scroll">
                  {PERSONALTY_DATA.map((item) => (
                    <SelectPersonality
                      selected={personality}
                      value={item.personlityDog}
                      onClick={selectPersonalityFn}
                      key={item.personlityDog}
                    />
                  ))}
                </ul>
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
