import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

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

const registerFooterContent = (
  <div className="flex flex-col items-center  gap-6">
    <Button
      label="Github로 회원가입"
      bgColor
      onClick={() => {console.log('github!')}}
      icon={AiFillGithub}
    />
    <Button
      label="Google로 회원가입"
      bgColor
      onClick={() => {console.log('google')}}
      icon={FcGoogle}
    />
    <p onClick={()=>console.log('check')} className="cursor-pointer">이미 회원이신가요? <span className="text-red-400" >로그인</span></p>
  </div>
);

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
