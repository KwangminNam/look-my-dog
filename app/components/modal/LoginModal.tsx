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
import { useEffect, useState } from "react";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {SiNaver} from 'react-icons/si'

// SNS LOGIN TYPE
type SnsName = "github" | "google" | "naver";

type ValidationType = {
  email: string;
  password: string;
};

export default function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const validation: ZodType<ValidationType> = z.object({
    email: z.string().email("이메일 형식에 맞게 입력해주세요."),
    password: z
      .string()
      .min(5, "비밀번호는 5글자 이상 이여야합니다")
      .max(10, "비밀번호는 10글자 이하 여야합니다")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    resolver: zodResolver(validation),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onToggleLogin = () => {
    loginModal.actionClose();
    registerModal.actionOpen();
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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
          toast.error("아이디와 비밀번호를 확인해주세요.");
        }
      })
      .catch((error) => toast.error(error))
      .finally(() => setIsLoading(false));
  };

  const onSnsLogin = (name: SnsName) => {
    setIsLoading(true);
    signIn(name);
  };

  const loginBodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        label="아이디"
        register={register}
        errors={errors}
        required
        focus
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
    <div className="flex items-center flex-col gap-4">
      <Button
        label="Github로 로그인하기"
        bgColor
        onClick={() => {
          onSnsLogin("github");
        }}
        icon={AiFillGithub}
        disabled={isLoading}
      />
      <Button
        label="Google로 로그인하기"
        bgColor
        onClick={() => {
          onSnsLogin("google");
        }}
        icon={FcGoogle}
        disabled={isLoading}
      />
      <Button
        label="Google로 로그인하기"
        bgColor
        onClick={() => {
          onSnsLogin("naver");
        }}
        icon={SiNaver}
        disabled={isLoading}
        iconColor="green"
      />
      <p className="cursor-pointer" onClick={onToggleLogin}>
        룩마독이 처음이신가요? <span className="text-red-400">회원가입</span>
      </p>
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
      isLoading={isLoading}
    />
  );
}
