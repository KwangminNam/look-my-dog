"use client";

import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import Loading from "../Loader/Loading";

interface ModalProps {
  title: string | undefined;
  subtitle?: string;
  isOpen: boolean;
  actionLabel: string;
  bodyContent?: React.ReactElement;
  footerContent?: React.ReactElement;
  secondActionLabel?: string;
  disabled?: boolean;
  stepsLength?: any;
  currentStep?: number;
  secondActionOnclick?: () => void;
  closeAction: () => void;
  actionOnclick: () => void;
  isLoading?:boolean;
}

export default function Modal({
  title,
  subtitle,
  disabled,
  bodyContent,
  isOpen,
  footerContent,
  actionLabel,
  stepsLength,
  secondActionLabel,
  currentStep,
  isLoading,
  actionOnclick,
  closeAction,
  secondActionOnclick
}: ModalProps) {

  console.log(disabled);
  console.log(isLoading)

  return isOpen ? (
    <div className="fixed z-[100] top-0 left-0 w-full h-full bg-opacity-80 bg-black">
      <div
        className={`translate duration-300 h-full ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center items-center h-full">
          {/* MODAL */}
          <div className="bg-white w-[650px] rounded-2xl relative flex flex-col justify-between px-7">
            {isLoading && <Loading />}
            <header
              className="
                py-9
                boder
                border-b-2
                flex
                justify-center
                text-2xl
                items-center
              "
            >
              <span>{title}</span>
              <button className="absolute top-8 right-9" onClick={closeAction}>
                <IoMdClose size={40} />
              </button>
            </header>
            {/* BODY CONTENT */}
            <div className="flex flex-col relative p-9">
              <div className="pb-16">{bodyContent}</div>
              {stepsLength && (
                <p className="absolute left-0 top-[-40px]">
                  {stepsLength}단계 중
                  <span className="text-red-400">
                    {currentStep === 4 ? "마지막" : currentStep}단계
                  </span>
                  에요
                </p>
              )}
              {/* FOOTER CONTENT */}
            </div>
            {/* BUTTON */}
            <div className="flex justify-between gap-7 pb-2">
              {secondActionLabel && secondActionOnclick ? (
                <Button
                  label={secondActionLabel}
                  onClick={secondActionOnclick}
                  disabled={disabled}
                />
              ) : undefined}
              <Button
                label={actionLabel}
                onClick={actionOnclick}
                bgColor={actionLabel === "등록하기" ? true : false}
                disabled={disabled}
              />
            </div>
            <hr />
            <div className="pb-9">{footerContent}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
