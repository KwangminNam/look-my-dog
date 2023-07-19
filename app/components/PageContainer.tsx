'use client';

interface PageContainer {
  children:React.ReactNode;
}

export default function PageContainer({children}:PageContainer) {
  return (
    <section
      className="
        pt-20
        grid-cols-1
        sm:grid-cols-2
        grid
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        md:grid-cols-3
        gap-8
    ">
      {children}
    </section>
  )
}
