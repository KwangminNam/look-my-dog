'use client';

interface LostDogDetialListProps {
  value: string;
  label: string;
}

export default function LostDogDetialListItem({ value, label }: LostDogDetialListProps) {
  return (
    <li className="w-full mb-2 text-center rounded-xl py-3 border-2 border-neutral-300">
      <span className="text-blue-400">{label}:</span>
      {value}
    </li>
  )
}
