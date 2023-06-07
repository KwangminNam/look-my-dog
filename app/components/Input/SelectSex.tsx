'use client';

interface SelectSexProps {
  selected: boolean;
  value: string;
  onClick: (value: string) => void;
}


export default function SelectSex({ selected, value, onClick }: SelectSexProps) {
  return (
    <div className="cursor-pointer" onClick={() => onClick(value)}>
      <span className={`border-[3px] border-solid  ${selected ? "border-black" : "border-neutral-300"}`}>{value}</span>
    </div>
  )
}
