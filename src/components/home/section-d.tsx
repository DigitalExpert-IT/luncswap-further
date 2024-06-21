import { Button } from "../ui/button";
import "@fontsource/red-rose";

export function SectionD() {
  return (
    <div className="section-d">
      <div className="container">
        <div className=" flex rounded-3xl bg-[url('space.png')] relative h-[51vh] max-h-[calc(51vh-80%)] overflow-y-visible p-5 items-center">
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
            <span className="text-yellow-500 text-4xl lg:text-5xl font-[red-rose] font-bold">
              Empowering Your Project!
            </span>
            <span className="my-10 z-10 text-sm">
              Every swap on LUNCSwap incorporates a 1.5% burn tax, a mechanism
              that not only supports the price stability of LUNC but also
              contributes to its overall value increase. By choosing LUNCSwap,
              you&aposre directly supporting the ecosystem that your project
              calls home
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
