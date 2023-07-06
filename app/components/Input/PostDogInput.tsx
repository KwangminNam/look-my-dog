import Image, { StaticImageData } from "next/image";

interface PostDogInput {
  label: string;
  src: string | StaticImageData;
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
}: PostDogInput) {
  return (
    <li
      onClick={() => onClick((urlString as string) || label)}
      className={`
        relative
        border-2
        rounded-lg
        cursor-pointer
        p-5
        hover:border-blue-500
        text-sm
        md:text-xl
        ${
          selected
            ? "border-[3px] border-solid border-blue-500"
            : "border-neutral-300"
        }
      `}
    >
      <span>{label}</span>
      <Image
        className="
          w-[40px]
          h-[40px]
          md:w-[60px]
          md:h-[60px]
          rounded-full
          top-[-15%]
          md:top-[-50%]
          translate-y-1/2
          absolute
          right-0
          "
        width={60}
        height={60}
        src={`${src}.png`}
        alt={label}
      />
    </li>
  );
}
