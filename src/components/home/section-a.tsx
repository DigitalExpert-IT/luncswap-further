import { Banner } from "../ui/banner";
import { Button } from "@/components/ui/button";

export function SectionA() {
  return (
    <div className="section-a">
      <img
        src="https://ik.imagekit.io/msxxxaegj/Luncswap/jering.png?updatedAt=1715000183520"
        className="absolute w-screen opacity-50 z-[-1] aspect-[1.9]"
      />
      <div className="container">
        <div className="mt-20">
          <Banner />
        </div>
        <div className="flex justify-center items-center gap-10">
          <img srcSet="https://ik.imagekit.io/msxxxaegj/Luncswap/logoWBlink.png?updatedAt=1715000553428" />
          <div className="flex-column space-y-10">
            <span className="text-5xl font-bold">
              A DEX exclusively created for{" "}
              <span className="text-yellow-300">LUNACLASSIC</span> is here.
            </span>
            <div className="space-x-5">
              <Button>Connect Wallet</Button>
              <Button className="bg-white">Swap Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
