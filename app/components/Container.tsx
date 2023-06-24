"use client";

interface ContainerProps {
  children: React.ReactNode;
  nonPadding?: boolean;
}

export default function Container({ children, nonPadding }: ContainerProps) {
  return (
    <div
      className={`
       ${nonPadding ? 'pt-0' : 'pt-9'} 
       w-[1600px]
       mx-auto
       xl:px-20
       md:px-10
       sm:px-2
       px-4
       `}
    >
      {children}
    </div>
  );
}
