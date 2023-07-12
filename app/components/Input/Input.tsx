'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Validation from "../Validation";
import { GiWeight } from 'react-icons/gi'
// import { use, useEffect,  } from "react";

export interface InputProps {
  id: string;
  label: string;
  type?: string;
  errors: FieldErrors | undefined;
  required?: boolean;
  formatWeight?: boolean;
  requiredField?: boolean;
  focus?: boolean;
  min?: any;
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
  min,
  register
}: InputProps) {

  // const inputRef = useRef<HTMLInputElement>(null);

  console.log(errors);

  console.log(errors?.root?.message)

  

  return (
    <div className='w-full relative'>
      {formatWeight && <GiWeight size={35} className="hidden md:block text-neutral-500 absolute right-40 top-1/2 -translate-y-1/2" />}
      <input
        min={min}
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
          border-solid
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          border-2
          text-2xl
          ${errors?.[id] ? "border-red-400" : "border-neutral-400"}
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
