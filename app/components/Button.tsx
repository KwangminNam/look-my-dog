"use client";

import { IconType } from "react-icons";


export interface ButtonProps {
  label: string;
  bgColor?: boolean;
  borderColor?: boolean;
  disabled?: boolean;
  halfWidth?:boolean;
  icon?: IconType;
  iconColor?:string;
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  borderColor,
  label,
  bgColor,
  halfWidth,
  disabled,
  iconColor,
  onClick,
  icon: Icon
}: ButtonProps) {
  return (
    <button
      className={`
        ${halfWidth  ? 'w-[200px]': 'w-full'}
        ${borderColor ? 'border-2 border-neutral-400' : null}
        ${borderColor ? 'bg-none' : null}
        rounded-md
        h-12
        disabled:opacity-40
        disabled:cursor-not-allowed
        ${bgColor ? "bg-slate-500" : "bg-sky-500"}
        text-2xl
        font-light
        relative
        text-white
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {Icon && <Icon size={35} color={iconColor} className="absolute left-28 top-1" />}
    </button>
  );
}

export default Button;


