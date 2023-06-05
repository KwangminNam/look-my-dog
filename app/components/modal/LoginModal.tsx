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

export default function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("로그인 성공");
        console.log("로그인성공")
        router.refresh();
        loginModal.actionClose();
      }
      if (callback?.error) {
        toast.error("로그인 실패");
      }
    });
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
    <div className="flex flex-col gap-6">
      <Button
        label="Github로 로그인하기"
        bgColor
        onClick={() => {}}
        icon={AiFillGithub}
      />
      <Button
        label="Google로 로그인하기"
        bgColor
        onClick={() => {}}
        icon={FcGoogle}
      />
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
    />
  );
}
