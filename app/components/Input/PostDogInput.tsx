import Image from "next/image";

interface PostDogInput {
  label: string;
  src: string;
  selected: boolean;
  urlString?: string;
  onClick: (value: string) => void;
}

export default function PostDogInput({
  label,
  src,
  selected,
  urlString,
  onClick 
}:PostDogInput) {

  return (
    <div
      onClick={() => onClick(urlString as string || label)}
      className={`
        relative
        border-2
        rounded-lg
        cursor-pointer
        p-5
        hover:border-black
        ${selected ? "border-[3px] border-solid border-black" : "border-neutral-300"}
      `
      }>
      <span>{label}</span>
      <Image
        className="w-[60px] h-[50px] rounded-full top-[-50%] translate-y-1/2 absolute right-0"
        width={60}
        height={60}
        src={`${src}.jpeg`}
        alt={label}
      />
    </div>
  );
}
