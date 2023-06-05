"use client";

import axios from "axios";
import useRegisterModal from "../../hooks/useRegisterModal";
import Button from "../Button";
import Input from "../Input/Input";
import Modal from "./Modal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { z, ZodType } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

type ValidationType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const validation: ZodType<ValidationType> = z.object({
    name: z.string().min(2).max(5),
    email:z.string().email(),
    password:z.string().min(5).max(10),
    passwordConfirm:z.string().min(5).max(10),
  }).refine((data)=> data.password === data.passwordConfirm , {
    message:"비밀번호가 일치하지않습니다.",
    path:["passwordConfirm"]
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues | ValidationType>({
    // resolver:zodResolver(validation),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const loginBodyContent = (
    <div className="flex flex-col gap-6">
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
      {/* <Input
        register={register}
        errors={errors}
        id="passwordConfirm"
        type="password"
        label="비밀번호 확인"
        required
      /> */}
    </div>
  );

  const loginFooterContent = (
    <div className="flex flex-col gap-6">
      <Button
        label="Github로 회원가입"
        bgColor
        onClick={() => {}}
        icon={AiFillGithub}
      />
      <Button
        label="Google로 회원가입"
        bgColor
        onClick={() => {}}
        icon={FcGoogle}
      />
    </div>
  );

  const onRegister: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("회원가입 성공");
        registerModal.actionClose();
        loginModal.actionOpen();
        console.log("success");
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        console.log("findlay");
      });
  };

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="회원가입"
      closeAction={registerModal.actionClose}
      actionLabel="회원가입"
      actionOnclick={handleSubmit(onRegister)}
      bodyContent={loginBodyContent}
      footerContent={loginFooterContent}
    />
  );
}
