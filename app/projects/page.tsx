import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-2 gap-3 ">
      <div className="group flex flex-col col-start-1 col-span-2 md:col-start-1 md:col-span-1 h-[22rem] md:h-82 bg-neutral-500/20 rounded-md relative p-1">
        <div className="relative rounded-md h-[70%] overflow-hidden ">
          <Image
            src={`/assets/oyeti-timileyin.png`}
            objectPosition="top"
            objectFit="cover"
            fill
            alt=""
            className="select-none transition-all group-hover:scale-110"
          />
        </div>
        <div>
          <p className=" font-medium my-2">Name</p>
        </div>
      </div>
      <div className="group flex flex-col col-start-1 col-span-2 md:col-start-2 md:col-span-1  h-[22rem] md:h-82 bg-neutral-500/20 rounded-md relative p-1">
        <div className="relative rounded-md h-[70%] overflow-hidden">
          <Image
            src={`/assets/oyeti-timileyin.png`}
            className="select-none transition-all group-hover:scale-110"
            objectPosition="top"
            objectFit="cover"
            fill
            alt=""
          />
        </div>
        <div>
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default page;
