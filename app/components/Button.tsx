"use client";

import { IconType } from "react-icons";
import Loading from "./Loader/Loading";

interface ButtonProps {
  label: string;
  bgColor?: boolean;
  borderColor?: boolean;
  disabled?: boolean;
  icon?: IconType;
  onClick: () => void;
}

function Button({
  borderColor,
  label,
  bgColor,
  disabled,
  onClick,
  icon: Icon
}: ButtonProps) {
  return (
    <button
      className={`
       w-full
      rounded-xl
      h-24
      disabled:opacity-70
      disabled:cursor-not-allowed
      ${bgColor ? "bg-red-500" : "bg-sky-500"}
      text-3xl
      relative
      text-white
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {Icon && <Icon size={40} className="absolute left-64 top-7" />}
    </button>
  );
}

export default Button;
