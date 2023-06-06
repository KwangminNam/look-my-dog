"use client";

import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import Loading from "../Loader/Loading";

interface ModalProps {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  actionLabel: string;
  bodyContent?: React.ReactElement;
  footerContent?: React.ReactElement;
  secondActionLabel?: string;
  disabled?: boolean;
  secondActionOnclick?: () => void;
  closeAction: () => void;
  actionOnclick: () => void;
}

export default function Modal({
  title,
  subtitle,
  disabled,
  bodyContent,
  isOpen,
  footerContent,
  actionLabel,
  actionOnclick,
  closeAction,
  secondActionLabel,
  secondActionOnclick
}: ModalProps) {
  return isOpen ? (
    <div className="fixed z-[100] top-0 left-0 w-full h-full bg-opacity-80 bg-black">
      <div
        className={`translate duration-300 h-full ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center items-center h-full">
          {/* MODAL */}
          <div className="bg-white w-[900px] h-[850px] rounded-2xl relative flex flex-col justify-between px-7">
            {disabled && <Loading />}
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
            <div className="flex flex-col">
              <div className="pb-16">{bodyContent}</div>
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
