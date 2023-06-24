'use client';

interface MenuItem {
  label: string;
  onClick?: () => void;
}

export default function MenuItem({ label, onClick }: MenuItem) {
  return (
    <li 
      className="
        w-full
        p-2
        hover:bg-red-50
        cursor-pointer
        text-center
        border-b-[1px]
        border-neutral-300
      "
      onClick={onClick}
    >
      <span>{label}</span>
    </li>
  )
}
