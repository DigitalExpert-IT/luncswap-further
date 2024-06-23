import React from "react";
import { EMPOWER } from "@/constant/dummy";
import { MoveRight } from "lucide-react";

export const SectionEmpower = () => {
  return (
    <div className="section-d">
      <div className="px-5 lg:px-10 xl:px-28">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold ">
            Empower Your DeFi Ventures with{" "}
            <span className="text-[#FCDD6F]">LUNS</span>
          </h1>
        </div>
        <div className="flex rounded-3xl bg-gradient-to-r from-[#184B6A] to-[#085364] relative max-h-[calc(51vh-80%)] overflow-y-visible p-5 items-center">
          <img
            src="rabbit&truck.png"
            className="opacity-40 md:opacity-10 lg:opacity-100 absolute -bottom-10 -left-5 w-[30%]"
          />
          <div className="md:w-[0%] lg:w-[80%] 2xl:w-[50%] hidden md:block"></div>
          <div className="z-10 space-y-20 md:space-y-0 md:flex">
            {EMPOWER.map((item, idx) => (
              <div className="flex flex-col xl:items-start" key={idx}>
                <div>
                  <img src={item.image} />
                </div>
                <div className="flex flex-col md:w-[85%] my-5 text-justify">
                  <span className="text-4xl font-[red-rose] mb-2 font-extrabold text-[#FCDD6F] capitalize">
                    {item.name}
                  </span>
                  <span>{item.description}</span>
                </div>
                <div className="flex items-center space-x-4 mt-5">
                  <span className="text-2xl capitalize">{item.linkname}</span>
                  <MoveRight size={25} strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
