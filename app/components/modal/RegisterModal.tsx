"use client";

import axios from "axios";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../Button";
import Input from "../Input/Input";
import Modal from "./Modal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {SiNaver} from 'react-icons/si'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import ModalFooterInfo from "./ModalFooterInfo";

type SnsName = "github" | "google" | "naver";

type ValidationType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isLoading ,setIsLoading ] = useState(false);

  const validation: ZodType<ValidationType> = z
    .object({
      name: z
        .string()
        .min(2, "이름은 두글자 이상 이여야 합니다.")
        .max(5, "이름은 다섯글자 이하 여야 합니다."),
      email: z.string().email("이메일 형식에 맞게 입력해주세요."),
      password: z
        .string()
        .min(5, "비밀번호는 5글자 이상 이여야합니다")
        .max(10, "비밀번호는 10글자 이하 여야합니다"),
      passwordConfirm: z
        .string()
        .min(5, "비밀번호는 5글자 이상 이여야합니다")
        .max(10, "비밀번호는 10글자 이하 여야합니다")
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "비밀번호가 일치하지않습니다.",
      path: ["passwordConfirm"]
    });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues | ValidationType>({
    resolver: zodResolver(validation),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  console.log(errors);

  const onToggleLogin = () => {
    registerModal.actionClose();
    loginModal.actionOpen();
  };

  const onSnsRegister = (name:SnsName) => {
    signIn(name);
    setIsLoading(true);
  }

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

  const registerFooterContent = (
    <div className="flex flex-col items-center  gap-4">
      <Button
        label="깃허브로 회원가입"
        bgColor
        onClick={() => {
          onSnsRegister("github");
        }}
        icon={AiFillGithub}
        textColor
        borderColor
        disabled={isLoading}
      />
      <Button
        label="구글로 회원가입"
        bgColor
        onClick={() => {
          onSnsRegister("google");
        }}
        icon={FcGoogle}
        textColor
        borderColor
        disabled={isLoading}
      />
      <Button
        label="네이버로 회원가입"
        bgColor
        onClick={() => {
          onSnsRegister("naver");
        }}
        icon={SiNaver}
        iconColor='2db400'
        textColor
        borderColor
        disabled={isLoading}
      />
      <ModalFooterInfo label="이미 회원이신가요?" actionLabel="로그인" onToggleAction={onToggleLogin}/>
    </div>
  );

  const onRegister: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("회원가입 성공",{
          icon:'🐶',
        });
        registerModal.actionClose();
        loginModal.actionOpen();
        console.log("success");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="회원가입"
      closeAction={registerModal.actionClose}
      actionLabel="회원가입"
      actionOnclick={handleSubmit(onRegister)}
      bodyContent={registerBodyContent}
      footerContent={registerFooterContent}
      isLoading={isLoading}
    />
  );
}
