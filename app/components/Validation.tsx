'use client';

interface ValidationProps {
  validation?: string | null;
}

export default function Validation({ validation }: ValidationProps) {
  return (
    <span
      className="
        absolute
        left-2
        bottom-[-21px]
        text-sm
        text-red-400
        ">
      {validation}
    </span>
  )
}
