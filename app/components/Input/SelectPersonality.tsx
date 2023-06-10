"use client";

interface SelectPersonality {
  onClick: any;
  selected?: boolean;
  value: any;
}

export default function SelectPersonality({
  onClick,
  selected,
  value
}: SelectPersonality) {
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
        ${
          selected
            ? "bg-red-400 border-red-400 text-yellow-50"
            : "border-neutral-300"
        }
        ${
          selected
            ? "bg-blue-500 border-blue-500 text-yellow-50"
            : "border-neutral-300"
        }
        `}
      >
        {value}
      </span>
    </div>
  );
}
