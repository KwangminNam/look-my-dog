"use client";

interface SelectPersonalityProps {
  onClick: (value:string) => void;
  selected?: string[];
  value: string;
}

export default function SelectPersonality({
  onClick,
  selected,
  value
}: SelectPersonalityProps) {
  const isSelected = selected?.includes(value);

  return (
    <li className="relative">
      <label
        htmlFor={value}
        className={`
        cursor-pointer
        text-md
        md:text-2xl
        rounded-xl
        border-[3px]
        border-solid
        p-3
        mr-1
        flex-1
        w-full
        block
        ${isSelected ? "border-blue-500" : "border-neutral-300"}
      `}
      >
        <span>{value}</span>
      </label>
      <input
        onClick={() => onClick(value)}
        type="checkbox"
        checked={isSelected}
        name="checkbox-two"
        id={value}
        className="
          bg-amber-200
          hover:bg-amber-400
          cursor-pointer 
          w-10
          h-10
          border-3
          border-rose-500
          rounded-lg
          checked:bg-green-500
          absolute
          right-7
          top-1/2
          translate-y-[-50%]
          "
      />
    </li>
  );
}
