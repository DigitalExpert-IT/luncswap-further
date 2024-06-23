import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import { FOOTER_DATA } from "@/constant/dummy";

export const Footer = () => {
  return (
    <footer className="bg-[#011521] p-10 md:p-20">
      <div className="items-center lg:flex">
        <div className="flex flex-col items-center md:items-start mb-10 lg:mb-0 flex-1">
          <img src="lunclogo.png" />
          <p className="txt-logo">Swap token in one minute</p>
        </div>
        <div className="md:flex justify-between w-full md:px-24 space-y-5 md:space-y-0  flex-1">
          {FOOTER_DATA.map((item, idx) => (
            <div key={idx}>
              <h1 className="text-[#FCDD6F] text-xl uppercase font-extrabold mb-5">
                {item.title}
              </h1>
              {item.child.map((child, ids) => (
                <div key={ids}>
                  <span className="text-lg uppercase">{child.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex-col flex space-y-5 mt-10 lg:mt-0 flex-1 lg:items-center">
          <Button className="lg:w-2/5">
            <span className="flex font-bold text-lg items-center">
              Swap LUNC Now
              <MoveRight className="ml-2" />
            </span>
          </Button>
          <Button className="lg:w-2/5" variant="outline">
            <span className="flex font-bold text-lg items-center">
              Go to Launchpad
              <MoveRight className="ml-2" />
            </span>
          </Button>
        </div>
      </div>
    </footer>
  );
};
