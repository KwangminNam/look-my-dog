'use client';

interface MenuItem {
  label: string;
  onClick?: () => void;
}

export default function MenuItem({ label, onClick }: MenuItem) {
  return (
    <li
      className={`
      ${label === '홈' ? 'md:hidden block' : null}
      w-full
      p-2
      hover:bg-slate-300
      hover:rounded-xl
      cursor-pointer
      text-center
      border-b-[1px]
      border-neutral-300
    `}

      onClick={onClick}
    >
      <span>{label}</span>
    </li>
  )
}
