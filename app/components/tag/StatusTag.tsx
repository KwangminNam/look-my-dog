import { useMemo } from "react";

interface StatusTagProps {
  label: string;
}

const getStyleLabel = (labelStyle:string) => {
  switch (labelStyle) {
    case "반환":
      return "bg-red-500";
    case "입양":
      return "bg-green-500";
    case "자연사":
      return "bg-blue-600 text-white";
    case "기증":
      return "bg-yellow-300";
    case "보호중":
      return "bg-[#28a649] text-white";
    default:
      return "";
  }
};


export default function StatusTag({ label }: StatusTagProps) {

  const statusLabel = useMemo(() => {
    switch (true) {
      case label === "종료(반환)":
        return "반환";
      case label === "종료(입양)":
        return "입양";
      case label === "종료(자연사)":
        return "자연사";
      case label === "종료(기증)":
        return "기증";
      default:
        return label;
    }
  }, [label]);


  const customClasses = useMemo(()=>{
    const modeCalss = getStyleLabel(statusLabel);

    return modeCalss;
  },[statusLabel,label])

  return (
    <span className={`${customClasses} rounded-lg p-1 text-sm absolute top-0 right-0`}>
      {statusLabel}
    </span>
  );
}
