"use client";

import { TbDog } from "react-icons/tb";
import {PropagateLoader} from "react-spinners";

export default function loading() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <TbDog size={250} color='#fcb103' />
      <PropagateLoader color="#24a359" className="mt-3"/>
    </div>
  );
}
