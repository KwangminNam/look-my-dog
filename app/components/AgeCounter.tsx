'use client';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface AgeCounter {
  value: number;
  onChange: (age: number) => void;
}

export default function AgeCounter({ value, onChange }: AgeCounter) {

  const increaseAge = () => {
    onChange(value + 1);
  }
  const decreaseAge = () => {
    if(value === 1) return;
    onChange(value - 1);
  }

  return (
    <div className="flex items-center">
      <button
        className="
          border
          border-solid
          rounded-full
          border-neutral-400"
        onClick={decreaseAge}>
        <AiOutlineMinus size={30} />
      </button>
      <span className="mx-3 text-2xl">{value}</span>
      <button
        className="
          border
          border-solid
          rounded-full
          border-neutral-400"
        onClick={increaseAge}>
        <AiOutlinePlus size={30} />
      </button>
    </div>
  )
}
