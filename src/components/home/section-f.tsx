import React from "react";

export const SectionF = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div className="flex align-center items-center justify-center mb-10">
          <h1 className="capitalize font-[red-rose] text-2xl font-semibold">
            grow with our Community
          </h1>
        </div>
        <div className="px-36 relative">
          <div className="flex w-full bg-[#02314D] rounded-2xl">
            <div className="rounded-2xl overflow-hidden w-1/2 shadow-[rgba(0,0,15,0.5)_10px_0px_20px_0px]">
              <img
                src="community.jpg"
                alt="community-image"
                className="object-fill w-full h-[50vh]"
              />
            </div>
            <div className="flex flex-col pl-10 justify-between my-10">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold font-[red-rose] text-[#FCDD6F]">
                  Discord
                </span>
                <span className="text-xl">Luncswap validator</span>
                <span className="text-xl">Join channel</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold font-[red-rose] text-[#FCDD6F]">
                  Discord
                </span>
                <span className="text-xl">Luncswap validator</span>
                <span className="text-xl">Join channel</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold font-[red-rose] text-[#FCDD6F]">
                  Discord
                </span>
                <span className="text-xl">Luncswap validator</span>
                <span className="text-xl">Join channel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
