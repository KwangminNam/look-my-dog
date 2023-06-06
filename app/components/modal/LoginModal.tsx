"use client";

import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import useLoginModal from "../../hooks/useLoginModal";
import Button from "../Button";
import Input from "../Input/Input";
import Modal from "./Modal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onToggleLogin = () => {
    loginModal.actionClose();
    registerModal.actionOpen();
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false
    })
      .then((callback) => {
        if (callback?.ok) {
          setIsLoading(false);
          toast.success("로그인 성공");
          router.refresh();
          loginModal.actionClose();
        }
        if (callback?.error) {
          toast.error("로그인 실패");
        }
      })
      .catch((error) => toast.error(error))
      .finally(() => setIsLoading(false));
  };

  const loginBodyContent = (
    <div className="flex flex-col gap-6">
      <Input
        id="email"
        label="아이디"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="비밀번호"
        register={register}
        errors={errors}
        type="password"
        required
      />
    </div>
  );

  const loginFooterContent = (
    <div className="flex items-center flex-col gap-6">
      <Button
        label="Github로 로그인하기"
        bgColor
        onClick={() => {signIn('github')}}
        icon={AiFillGithub}
        disabled={isLoading}
      />
      <Button
        label="Google로 로그인하기"
        bgColor
        onClick={() => {signIn('google')}}
        icon={FcGoogle}
        disabled={isLoading}
      />
      <p className="cursor-pointer" onClick={onToggleLogin}>룩마독이 처음이신가요? <span className="text-red-400">회원가입</span></p>
    </div>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="로그인"
      closeAction={loginModal.actionClose}
      actionLabel="로그인"
      actionOnclick={handleSubmit(onSubmit)}
      bodyContent={loginBodyContent}
      footerContent={loginFooterContent}
      disabled={isLoading}
    />
  );
}
