import { Button } from "../ui/button";
import "@fontsource/red-rose";

export function SectionD() {
  return (
    <div className="section-d">
      <div className="container">
        <div className=" flex rounded-3xl bg-[url('space.png')] relative md:h-[51vh] max-h-[calc(51vh-80%)] overflow-y-visible p-5 items-center">
          <img
            src="rabbit_moon.png"
            className="w-3/4 opacity-40 md:w-4/12 md:opacity-100 absolute bottom-0 left-0 rounded-bl-3xl"
          />
          <img
            src="coin_lunc.png"
            className="absolute -top-[10%] w-[30%] lg:w-1/6 -right-[2%] lg:-top-[10%] rounded-bl-3xl"
          />
          <div className="w-[70%] hidden md:block"></div>
          <div className="flex flex-col w-full lg:w-[80%]">
            <span className="text-[#FCDD6F] text-4xl lg:text-5xl font-[red-rose] font-extrabold uppercase">
              Lunc Swap Wallet
            </span>
            <span className="font-[red-ros] text-[#FCDD6F] text-3xl font-extrabold">
              Your Gateway to Decentralized Finance
            </span>
            <span className="my-10 z-10 text-xl">
              LuncSwap Wallet allows you to seamlessly access DApps on the LUNC
              & Cosmos blockchain and manage your assets securely. Connect,
              transact, and explore the world of decentralized finance with ease
              and confidence.
            </span>
            <div className="z-10">
              <Button>
                <span className="font-bold">Learn More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
