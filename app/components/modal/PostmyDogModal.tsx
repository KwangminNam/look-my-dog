"use client";

import { useEffect, useMemo, useState } from "react";
import usePostModal from "../../hooks/usePostModal";
import Modal from "./Modal";
import Input from "../Input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { TYPE_OF_DOG } from "../TypeDogs";
import Image from "next/image";
import PostDogInput from "../Input/PostDogInput";
import AgeCounter from "../AgeCounter";
import SelectSex from "../Input/SelectSex";
import ImageUpload from "../ImageUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";
import SelectPersonality from "../Input/SelectPersonality";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

enum POST_STEPS {
  DOGTYPE = 0,
  INFO = 1,
  DESC = 2,
  IMAGE = 3
}

type ValidationType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const MALE_DATA = [{ male: "남자" }, { male: "여자" }];

const PERSONALTY_DATA = [
  { personlityDog: "온순한 편이에요" },
  { personlityDog: "성격이 사나운편이에요." },
  { personlityDog: "사회성이 좋은편이에요" },
  { personlityDog: "낯을 많이 가려요." },
];

// const validation: ZodType<any> = z.object({
//   title: z
//     .string()
//     .min(2, "이름은 두글자 이상 이여야 합니다.")
//     .max(5, "이름은 다섯글자 이하 여야 합니다."),
//   dogName: z
//     .string()
//     .min(5, "비밀번호는 5글자 이상 이여야합니다")
//     .max(10, "비밀번호는 10글자 이하 여야합니다"),
//   weight: z
//     .string()
//     .min(5, "비밀번호는 5글자 이상 이여야합니다")
//     .max(10, "비밀번호는 10글자 이하 여야합니다")
// });

export default function PostmyDogModal() {
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
      dogType: "",
      dogAge: 1,
      male: "",
      imageSrc: "",
      personality: [],
      dogMonth: "",
      dogName: "",
      weight: "",
      desc: ""
    }
  });
  const postModal = usePostModal();
  const router = useRouter();

  const stepsArray = Object.keys(POST_STEPS)
    .filter((key) => isNaN(Number(key)))
    .map((key) => POST_STEPS[key as any]);
  const stepsLength = stepsArray.length;

  const [step, setStep] = useState(POST_STEPS.DOGTYPE);
  const [label, setLabel] = useState("");
  const [showMonthAge, setShowMonthAge] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = () => setShowMonthAge((prev) => !prev);

  const dogType = watch("dogType");
  const dogAge = watch("dogAge");
  const male = watch("male");
  const imageSrc = watch("imageSrc");
  const monthValue = watch("dogMonth");
  const dogName = watch("dogName");
  const weight = watch("dogWeight");
  const personality = watch("personality") || [];



  useEffect(() => {
    if (postModal.isOpen === false) {
      setStep(POST_STEPS.DOGTYPE);
    }
  }, [postModal.isOpen]);

  const nextStep = () => {
    // if (step === POST_STEPS.DOGTYPE && dogType === "") return;
    // if (step === POST_STEPS.INFO && dogName === "") return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const selectDogType = (value: string) => {
    setCustumValue("dogType", value);
    setLabel(value);
  };

  const selectMaleType = (value: string) => {
    setCustumValue("male", value);
  };

  // const selectPersonality = (value: string) => {
  //   setCustumValue("personality", value);
  // };


  const onSubmit = (data: any) => {
    if (step !== POST_STEPS.IMAGE) {
      return nextStep();
    }
    setIsLoading(true);

    console.log(data);

    axios.post('/api/listing', data)
      .then(() => {
        toast.success("강아지 등록 완료!");
        router.refresh();
        postModal.actionClose();
        reset();

      })
      .catch((err) => {
        toast.error('something went worng');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  const headerLabel = useMemo(() => {
    switch (step) {
      case POST_STEPS.DOGTYPE:
        return "강아지 종류 선택해주세요";
      case POST_STEPS.INFO:
        return "강아지에 대해 간단한 정보를 알려주세요";
      case POST_STEPS.DESC:
        return "강아지 성격을 알려주세요.";
      case POST_STEPS.IMAGE:
        return "강아지 사진을 올려주세요";
      default:
        return "Look my Dog";
    }
  }, [step]);

  const actionLabel = useMemo(() => {
    if (step === POST_STEPS.IMAGE) return "등록하기";
    if (dogType === "") return "강아지 종류를 선택해주세요!";
    return "다음 단계";
  }, [step, dogType]);

  const secondActionLabel = useMemo(() => {
    if (step === POST_STEPS.DOGTYPE) return undefined;
    return "뒤로";
  }, [step]);

  const setCustumValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    });
  };

  // const setCustumValue2 = (id: string, value: any) => {
  //   const newPersonality = Array.isArray(value)
  //     ? value
  //     : [value];
  //   setValue(id, newPersonality, {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //     shouldTouch: true
  //   });
  // };


  // TODO : 코드 파악하기.
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



  let bodyModal = (
    <div className="grid grid-cols-2 gap-4">
      {TYPE_OF_DOG.map((item) => (
        <PostDogInput
          label={item.label}
          src={item.src}
          selected={dogType === item.label}
          onClick={selectDogType}
          key={item.label}
        />
      ))}
    </div>
  );

  if (step === POST_STEPS.INFO) {
    bodyModal = (
      <>
        <div className="flex justify-center items-center mb-4">
          <div className="text-xl">
            나의 강아지 종류는 <span className="text-red-400">{label}</span>
          </div>
          {TYPE_OF_DOG.filter((item) => item.label === label).map(
            (item) => (
              <Image
                className="
                  border-2
                  border-neutral-300
                  border-solid
                  rounded-full"
                src={`${item.src}.jpeg`}
                alt={label}
                width={70}
                height={70}
              />
            )
          )}
        </div>
        <div className="flex-col flex items-center">
          <div className="flex gap-4">
            <Input
              id="dogName"
              register={register}
              errors={errors}
              label="강아지 이름"
              requiredField={dogName === "" ? true : false}
              required
            />
            <Input
              id="weight"
              type="number"
              register={register}
              errors={errors}
              label="몸무게"
              required
              min={0}
              requiredField={weight === "" ? true : false}
              formatWeight
            />
          </div>
          <div className="mt-4 flex py-6 w-full justify-between border-t border-b border-solid border-neutral-300">
            <span className="text-2xl">성별을 골라주세요</span>
            <div className="flex">
              {MALE_DATA.map((item) => (
                <SelectSex
                  onClick={selectMaleType}
                  key={item.male}
                  value={item.male}
                  selected={male === item.male}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="flex pt-6 w-full justify-between">
            <span className="text-2xl">강아지의 나이는 몇살인가요?</span>
            <AgeCounter
              value={dogAge}
              showMonth={showMonthAge}
              onToggle={onToggle}
              monthValue={monthValue}
              onMonthChange={(month) => setCustumValue("dogMonth", month)}
              onChange={(age) => setCustumValue("dogAge", age)}
            />
          </div>
        </div>
      </>
    );
  }
  if (step === POST_STEPS.DESC) {
    bodyModal = (
      <>
        <div className="flex flex-col flex-wrap justify-center gap-2 mb-5">
          {PERSONALTY_DATA.map((item) => (
            <SelectPersonality
              selected={personality}
              value={item.personlityDog}
              onClick={selectPersonalityFn}
            />
          ))}
        </div>
       <Input
          id="desc"
          label="추가 설명해주세요"
          required
          errors={errors}
          register={register}
        />
      </>
    );
  }

  if (step === POST_STEPS.IMAGE) {
    bodyModal = (
      <ImageUpload
        value={imageSrc}
        onChange={(value) => setCustumValue("imageSrc", value)}
      />
    );
  }

  return (
    <Modal
      title={headerLabel}
      isOpen={postModal.isOpen}
      closeAction={postModal.actionClose}
      bodyContent={bodyModal}
      actionLabel={actionLabel}
      actionOnclick={handleSubmit(onSubmit)}
      secondActionLabel={secondActionLabel}
      secondActionOnclick={step !== POST_STEPS.DOGTYPE ? prevStep : undefined}
      stepsLength={stepsLength}
      currentStep={step + 1}
      disabled={dogType === "" ? true : false}
    />
  );
}
