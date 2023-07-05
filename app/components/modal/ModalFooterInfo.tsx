'use client';
 
interface ModalFooterInfoProps {
  onToggleAction:()=>void;
  label:string;
  actionLabel:string;
}

export default function ModalFooterInfo({onToggleAction,label,actionLabel}:ModalFooterInfoProps) {
  return (
    <p className="cursor-pointer" onClick={onToggleAction}>
     {label}<span className="text-red-400">{actionLabel}</span>
    </p>
  )
}
