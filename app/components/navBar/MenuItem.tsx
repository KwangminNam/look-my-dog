'use client';

interface MenuItem {
  label: string;
  onClick?: () => void;
}

export default function MenuItem({ label, onClick }: MenuItem) {
  return (
    <div 
      className="
        w-full
        p-2
        hover:bg-red-50
        cursor-pointer
        text-center
        rounded-xl
      "
      onClick={onClick}
    >
      <span>{label}</span>
    </div>
  )
}
