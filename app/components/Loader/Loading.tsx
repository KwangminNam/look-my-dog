"use client";

import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="z-[500] fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <PropagateLoader size={30} color="#24a359"  />
    </div>
  );
}
