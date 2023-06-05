"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: () => void;
  bgColor?: boolean;
  borderColor?:boolean;
  icon?:IconType;
}

function Button({ borderColor, label, bgColor, onClick , icon:Icon}: ButtonProps) {
  return (
    <button
      className={`
       w-full
      rounded-xl
      h-24
      ${bgColor ? 'bg-red-500' : 'bg-sky-500'}
      text-3xl
      relative
      text-white
      `
    }
      onClick={onClick}
    >
      <span>{label}</span>
      {Icon && (
        <Icon size={40} className="absolute left-64 top-7" />
      )}
    </button>
  );
}

export default Button;
