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
        ${
          isSelected
            ? "border-blue-500"
            : "border-neutral-300"
        }
      `}
    >
      <div className="relative">
        <label htmlFor={value} className="ml-3">
          <span>{value}</span>
        </label>
        <input
          onClick={() => onClick(value)}
          type="checkbox"
          checked={isSelected}
          name="checkbox-two"
          id={value}
          className="bg-amber-200 hover:bg-amber-400 cursor-pointer 
            w-10 h-10 border-3 border-rose-500 rounded-lg checked:bg-green-500 absolute right-0 top-1/2 translate-y-[-50%]"
        />
      </div>
    </div>
  );
}
