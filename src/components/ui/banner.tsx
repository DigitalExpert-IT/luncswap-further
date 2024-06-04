import "@/styles/stroke.css";
import { Badge } from "./badge";

export const Banner = () => {
  return (
    <div className="relative flex bg-[#5B95C8] w-full shadow-sm rounded-[50px] px-10 py-5">
      <div className="flex flex-col gap-5 w-[58%]">
        <div className="flex align-center items-center">
          <img src="https://ik.imagekit.io/msxxxaegj/Luncswap/bull-rabbit-moon.png?updatedAt=1715012022271" />
          <div>
            <Badge>Happening Now</Badge>
          </div>
        </div>
        <span className="text-stroke">1.5% BURN for every swap</span>
        <span className="text-2xl">
          Every Swap Is a Step Towards Higher LUNC Value. Swap Now, and Watch
          Our LUNC Reach New Heights.
        </span>
      </div>
      <div className="flex-1">
        <img
          srcSet="https://ik.imagekit.io/msxxxaegj/Luncswap/rabbitNBull.png?updatedAt=1715000154150"
          className="absolute aspect-[5.3] -top-[11%] right-10"
        />
      </div>
    </div>
  );
};
