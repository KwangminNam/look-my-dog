"use client";
import { TbPhotoPlus } from 'react-icons/tb';
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
  editPage?: boolean;
}

export default function ImageUpload({ onChange, value, editPage }: ImageUploadProps) {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="cwf1ptzu"
      options={{
        maxFiles: 2
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className={`
            relative
            cursor-pointer
            hover:opacity-70
            border-dashed
            border-2
            p-20
            border-neutral-300
            flex
            flex-col
            justify-center
            items-center
            gap-4 text-neutral-600
            ${editPage ? 'w-full md:w-[1200px]' : null}
            ${editPage ? 'h-[250px] md:h-[550px]' : null}
            `}
          >
            <TbPhotoPlus size={50} />
            <p className='text-center'>강아지 사진을 등록해주세요!<br />클릭!</p>
            {value && (
              <Image
                src={value}
                alt="uploadimg"
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}
