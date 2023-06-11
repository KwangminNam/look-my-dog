'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Validation from "../Validation";
import { GiWeightScale } from 'react-icons/gi'
import { use, useEffect, useRef } from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  errors: FieldErrors | undefined;
  required?: boolean;
  formatWeight?: boolean;
  requiredField?: boolean;
  focus?:boolean;
  register: UseFormRegister<FieldValues>;
}

export default function Input({
  id,
  label,
  type = 'text',
  formatWeight,
  required,
  errors,
  requiredField,
  focus,
  register
}: InputProps) {

  const inputRef = useRef<HTMLInputElement>(null);

  
  return (
    <div className='w-full relative'>
      {formatWeight && <GiWeightScale size={35} className="absolute top-[20px] right-[25px] text-neutral-500" />}
      <input
        autoFocus={focus}
        id={id}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          border-solid
          border-neutral-400
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          text-2xl

        `}
      />
      <label
        className={`
          absolute
          text-sm
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          left-4
          text-neutral-400
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          `}>
        {label}
      </label>
      {errors?.[id] && <Validation validation={errors[id]?.message as string} />}
    </div>
  )
}
