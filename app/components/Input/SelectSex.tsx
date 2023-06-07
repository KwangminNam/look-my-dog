"use client";

interface SelectSexProps {
  selected: boolean;
  value: string;
  onClick: (value: string) => void;
}

export default function SelectSex({
  selected,
  value,
  onClick
}: SelectSexProps) {
  return (
    <div className="cursor-pointer" onClick={() => onClick(value)}>
      <span
        className={`
          text-2xl
          rounded-xl
          border-[3px]
          border-solid
          p-3
          mr-1
          ${selected && value ==='여자'? "bg-red-400 border-red-400 text-yellow-50" : "border-neutral-300"}
          ${selected && value ==='남자'? "bg-blue-500 border-blue-500 text-yellow-50" : "border-neutral-300"}
          `}
      >
        {value}
      </span>
    </div>
  );
}
