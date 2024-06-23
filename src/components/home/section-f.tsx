import React from "react";
import { MoveRight } from "lucide-react";
import { COMMUNITY } from "@/constant/dummy";

export const SectionF = () => {
  return (
    <div className="my-20 relative">
      <img src="bg-f.png" className="absolute -z-10 lg:-top-60" />
      <div className="container">
        <div className="flex flex-col align-center items-center justify-center mb-10 space-y-5">
          <h1 className="capitalize font-[red-rose] text-center text-4xl md:text-6xl font-semibold">
            grow with our Community
          </h1>
          <span className="text-center">
            Extremely active community that loves our mission and LUNC! Our
            telegram and discord are filled with community members 24/7 that
            would love to help you. Do not trust random messages of people
            claiming to be support or ever give out your wallet info to anyone.
          </span>
        </div>
        <div className="xl:px-36 relative">
          <img
            src="bunny.png"
            className="hidden absolute w-[25%] right-0 xl:top-5 lg:block"
          />
          <div className="w-full bg-[#02314D] rounded-2xl md:flex">
            <div className="rounded-2xl overflow-hidden xl:w-1/2 shadow-[rgba(0,0,15,0.5)_10px_0px_20px_0px]">
              <img
                src="community.jpg"
                alt="community-image"
                className="object-fill w-full h-[50vh]"
              />
            </div>
            <div className="flex flex-col p-10 space-y-10 xl:justify-between xl:p-0 xl:pl-10 xl:my-10">
              {COMMUNITY.map((item, key) => (
                <div className="flex flex-col" key={key}>
                  <span className="text-xl xl:text-4xl font-extrabold font-[red-rose] text-[#FCDD6F]">
                    {item.name}
                  </span>
                  <span className="xl:text-xl font-bold">{item.infor}</span>
                  <a
                    href={item.link}
                    className="flex space-x-5 align-center items-center"
                  >
                    <span className="xl:text-xl underline capitalize">
                      {item.linkName}
                    </span>
                    <MoveRight size={25} strokeWidth={2} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
