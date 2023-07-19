'use client';

interface PageTitleProps{
  title:string;
}

export default function PageTitle({title}:PageTitleProps) {
  return (
    <h2 className="text-4xl text-center pt-6">{title}</h2>
  )
}
