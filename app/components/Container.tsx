'use client';

interface ContainerProps {
  children:React.ReactNode;
}

export default function Container({children}:ContainerProps) {
  return (
    <div 
    className="
      w-[1600px]
      mx-auto
      xl:px-20
      md:px-10
      sm:px-2
      px-4
    "
    >
      {children}
    </div>
  )
}
