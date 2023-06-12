"use client";

interface SelectPersonality {
  onClick: any;
  selected?: any;
  value: any;
}

export default function SelectPersonality({
  onClick,
  selected,
  value
}: SelectPersonality) {

  const isSelected = selected.includes(value);

  return (
    <div
      className={`
        cursor-pointer
        text-2xl
        rounded-xl
        border-[3px]
        border-solid
        p-3
        mr-1
        flex-1
        ${isSelected
        ? "bg-red-400 border-red-400 text-yellow-50"
        : "border-neutral-300"
      }
        ${isSelected
        ? "bg-blue-500 border-blue-500 text-yellow-50"
        : "border-neutral-300"
      } `}
      onClick={() => onClick(value)}>
      <span>
        {value}
      </span>
    </div>

  );
}
