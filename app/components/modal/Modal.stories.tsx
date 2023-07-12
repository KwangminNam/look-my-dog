import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import Input from "../Input/Input";
import { FieldValues, useForm } from "react-hook-form";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MALE_DATA, PERSONALTY_DATA, POST_STEPS , POST_STEPS_TYPE } from "./PostmyDogModal";
import { useMemo, useState } from "react";
import PostDogInput from "../Input/PostDogInput";
import Image from "next/image";
import SelectSex from "../Input/SelectSex";
import AgeCounter from "../AgeCounter";
import SelectPersonality from "../Input/SelectPersonality";
import ImageUpload from "../ImageUpload";
import malti from '../../../public/images/puppy2/malti.png'

 const TYPE_OF_DOG = [
  {
    label: "말티즈",
    desc: "/images/puppy2/malti",
    src: '../../../public/images/puppy2/malti'
  },
  {
    label: "골든리트리버",
    desc: "골든리트리버 설명!",
    src: "/images/puppy2/golden-retriever"
  },
  {
    label: "비숑 프리제",
    desc: "비숑 설명!",
    src: "/images/puppy2/bichon-frise"
  },
  {
    label: "프렌치불독",
    desc: "비숑 설명!",
    src: "/images/puppy2/french-bulldog"
  },
  {
    label: "시츄",
    desc: "시츄",
    src: "/images/puppy2/sichew"
  },
  {
    label: "치와와",
    desc: "치와와 설명!",
    src: "/images/puppy2/chiwawa"
  },
  {
    label: "포메라이언",
    desc: "포메라이언 설명!",
    src: "/images/puppy2/pomeranian"
  },
  {
    label: "비글",
    desc: "비글 설명!",
    src: "/images/puppy2/beagle"
  },
  {
    label: "닥스훈트",
    desc: "닥스훈트 설명!",
    src: "/images/puppy2/dachshund"
  },
  {
    label: "푸들",
    desc: "푸들 설명!",
    src: "/images/puppy2/red-poodle"
  },
  {
    label: "코커스페니엘",
    desc: "푸들 설명!",
    src: "/images/puppy2/cocker-spaniel"
  },
  {
    label: "시베리안허스키",
    desc: "시베리안허스키 설명!",
    src: "/images/puppy2/husky"
  },
  {
    label: "달마시안",
    desc: "포메라이언 설명!",
    src: "/images/puppy2/dalmatian"
  }
];



const meta: Meta<typeof Modal> = {
  title: "Modal/ 모달창",
  component: Modal,
  tags: ["autudocs"]
};

const loginFooterContent = (
  <div className="flex items-center flex-col gap-4">
    <Button
      label="Github로 로그인하기"
      bgColor
      onClick={() => {
        console.log("github login!");
      }}
      icon={AiFillGithub}
    />
    <Button
      label="Google로 로그인하기"
      bgColor
      onClick={() => {
        console.log("google login!");
      }}
      icon={FcGoogle}
    />
    <p
      className="cursor-pointer"
      onClick={() => {
        console.log("first tiem in lmd!");
      }}
    >
      룩마독이 처음이신가요? <span className="text-red-400">회원가입</span>
    </p>
  </div>
);

export default meta;
type Story = StoryObj<typeof Modal>;

export const PrimaryModal: Story = (args: ModalProps) => {
  return <Modal {...args} />;
};

export const LoginModal: Story = (args: ModalProps) => {
  const {
    register,
    formState: { errors }
  } = useForm();

  const loginBodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        label="아이디"
        register={register}
        required
        errors={errors}
        focus
      />
      <Input
        id="password"
        label="비밀번호"
        register={register}
        type="password"
        errors={errors}
        required
      />
    </div>
  );
  return <Modal {...args} bodyContent={loginBodyContent} />;
};

const registerFooterContent = (
  <div className="flex flex-col items-center  gap-6">
    <Button
      label="Github로 회원가입"
      bgColor
      onClick={() => {
        console.log("github!");
      }}
      icon={AiFillGithub}
    />
    <Button
      label="Google로 회원가입"
      bgColor
      onClick={() => {
        console.log("google");
      }}
      icon={FcGoogle}
    />
    <p onClick={() => console.log("check")} className="cursor-pointer">
      이미 회원이신가요? <span className="text-red-400">로그인</span>
    </p>
  </div>
);

export const RegisterModal: Story = (args: ModalProps) => {
  const {
    register,
    formState: { errors }
  } = useForm();

  const registerBodyContent = (
    <div className="flex flex-col gap-5">
      <Input
        register={register}
        errors={errors}
        id="name"
        label="이름"
        required
      />
      <Input
        register={register}
        errors={errors}
        id="email"
        label="이메일주소"
        required
      />
      <Input
        register={register}
        errors={errors}
        id="password"
        type="password"
        label="비밀번호"
        required
      />
      <Input
        register={register}
        errors={errors}
        id="passwordConfirm"
        type="password"
        label="비밀번호 확인"
        required
      />
    </div>
  );

  return <Modal {...args} bodyContent={registerBodyContent} />;
};

export const PostMyDogModal: Story = (args: ModalProps) => {
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

  const [step, setStep] = useState<POST_STEPS_TYPE>(POST_STEPS.DOGTYPE);
  const [label, setLabel] = useState("");
  const dogType = watch("dogType");
  const dogAge = watch("dogAge");
  const male = watch("male");
  const imageSrc = watch("imageSrc");
  const monthValue = watch("dogMonth");
  const dogName = watch("dogName");
  const weight = watch("dogWeight");
  const [showMonthAge, setShowMonthAge] = useState(false);
  const onToggle = () => setShowMonthAge((prev) => !prev);
  
  const selectMaleType = (value: string) => {
    setCustumValue("male", value);
  };
  const setCustumValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true
    });
  };
  const personality = watch("personality") || [];
    const selectDogType = (value: string) => {
    setCustumValue("dogType", value);
    setLabel(value);
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

  const stepsArray = Object.keys(POST_STEPS)
  .filter((key) => isNaN(Number(key)))
  .map((key) => POST_STEPS[key as keyof typeof POST_STEPS]);

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
          <div className="flex justify-center items-center mb-4 gap-3">
            <div className="text-xl">
              나의 강아지 종류는 <span className="text-red-400">{label}</span>
            </div>
            {TYPE_OF_DOG.filter((item) => item.label === label).map((item) => (
              <Image
                className="
                    border-2
                    border-neutral-300
                    border-solid
                    rounded-full"
                src={`${item.src}.png`}
                alt={label}
                width={70}
                height={70}
                key={item.label}
              />
            ))}
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
                key={item.personlityDog}
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
  

  const stepsLength = stepsArray.length;
  const nextStep = () => {
    setStep((prev) => prev + 1 as POST_STEPS_TYPE);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1 as POST_STEPS_TYPE);
  };
  const onSubmit = (data: any) => {
    if (step !== POST_STEPS.IMAGE) {
      return nextStep();
    }
    console.log('done!')
  };

  return <Modal {...args}
    currentStep={step + 1}
    secondActionOnclick={step !== POST_STEPS.DOGTYPE ? prevStep : undefined}
    secondActionLabel={secondActionLabel}
    bodyContent={bodyModal}
    title={headerLabel}
    actionLabel={actionLabel}
    actionOnclick={handleSubmit(onSubmit)}
    stepsLength={stepsLength}
     />;
};

PrimaryModal.args = {
  title: "모달 타이틀 입니다.",
  subtitle: "모달 subtitle 입니다.",
  isOpen: true,
  actionLabel: "모달 액션라벨",
  bodyContent: <div>hello</div>,
  footerContent: <div>bye</div>
};

LoginModal.args = {
  title: "로그인",
  subtitle: "모달 subtitle 입니다.",
  isOpen: true,
  actionLabel: "모달 액션라벨",
  footerContent: loginFooterContent
};

RegisterModal.args = {
  title: "회원가입",
  subtitle: "모달 subtitle 입니다.",
  isOpen: true,
  actionLabel: "모달 액션라벨",
  footerContent: registerFooterContent
};

PostMyDogModal.args = {
  subtitle: "모달 subtitle 입니다.",
  isOpen: true,

};
