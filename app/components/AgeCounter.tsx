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
    onChange(value - 1);
  }

  return (
    <div>
      <button
        className="
          border
          border-solid
          rounded-full
          border-neutral-400"
        onClick={decreaseAge}>
        <AiOutlineMinus size={30} />
      </button>
      <span>{value}</span>
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
