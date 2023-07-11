'use client';

interface EmptyRelatedListProps {
  title:string;
}

export default function EmptyRelatedList({title}:EmptyRelatedListProps) {
  return (
    <p className="text-sm">{title}</p>
  )
}
