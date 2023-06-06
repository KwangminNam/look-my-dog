import Image from "next/image";

interface PostDogInput {
  label:string;
  src:string;
  selected:boolean;
}

export default function PostDogInput({label,src,selected}:PostDogInput) {
  return (
    <div className="relative border-2 border-neutral-300 rounded-lg cursor-pointer p-5 hover:border-black">
      <span>{label}</span>
      <Image
        className="rounded-full top-1/2 translate-y-1/2 absolute right-0"
        width={60}
        height={60}
        src={`${src}.jpeg`}
        alt={label}
      />
    </div>
  );
}
