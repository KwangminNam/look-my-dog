"use client";

import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import Loading from "../Loader/Loading";
import { useEffect } from "react";

export interface ModalProps {
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
  isLoading?: boolean;
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
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed z-[100] top-0 left-0 w-full h-full bg-opacity-80 bg-black">
      <div
        className={`h-full transform transition-transform duration-300 
       "
        `}
      >
        <div className="flex justify-center items-center h-full">
          {/* MODAL */}
          <div
            className="
              pb-16
              bg-white
              w-full
              sm:w-[650px]
              h-full
              md:h-[unset]
              rounded-2xl
              relative
              flex
              flex-col
              px-7
              transform
              translate-y-0
              transition-transform
              duration-300
            "
          >
            {isLoading && <Loading />}
            <header className="py-6 sm:py-9 border-b-2 flex justify-center text-sm md:text-2xl items-center">
              <span>{title}</span>
              <button
                className="absolute top-4 sm:top-8 right-4 sm:right-9"
                onClick={closeAction}
              >
                <IoMdClose size={40} />
              </button>
            </header>
            {/* BODY CONTENT */}
            <form className="flex flex-col relative p-6 sm:p-9 pb-3 sm:pb-3 pt-16" onSubmit={actionOnclick}>
              <div className="pb-8 sm:pb-12">{bodyContent}</div>
              {stepsLength && (
                <p className="absolute left-0 top-[10px] md:top-[-40px] text-sm md:text-sm">
                  {stepsLength}단계 중
                  <span className="text-red-400">
                    &nbsp;{currentStep === 4 ? "마지막" : currentStep}단계&nbsp;
                  </span>
                  에요.
                </p>
              )}
              <Button
                label={actionLabel}
                disabled={disabled}
              />
              {/* FOOTER CONTENT */}
            </form>
            {/* BUTTON */}
            {secondActionLabel && secondActionOnclick && (
              <div className="sm:px-9 px-6 flex flex-col-reverse sm:flex-row justify-between gap-4 sm:gap-7 pb-4 sm:pb-2">
                <Button
                  label={secondActionLabel}
                  onClick={secondActionOnclick}
                  disabled={disabled}
                  textColor
                  borderColor
                  bgColor
                />
              </div>
            )}
            <hr className="sm:hidden" />
            {footerContent && <div className="pb-6 sm:pb-9">{footerContent}</div>}
          </div>
        </div>
      </div>
    </div>
  ) : null;

}
