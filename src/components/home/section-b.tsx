export function SectionB() {
  return (
    // view
    <div className="py-20 md:py-40 overflow-x-hidden">
      {/* card image */}
      <div className="relative max-w-[80vw] w-[30rem] mx-auto">
        <img
          src="https://ik.imagekit.io/msxxxaegj/Luncswap/swap.png?updatedAt=1706092359001"
          alt="swap-card"
          className="opacity-60"
        />
        {/* pop up */}
        {/* left top */}
        <div className="absolute left-[-27%] top-[10%] w-40 bg-gray-500/30 p-2 rounded-lg backdrop-blur-sm border-solid border border-sky-100/30 ">
          <p className="text-center">
            <span className="text-[#f6dd7c] font-bold">Community </span>
            Our community will make your crypto ideas grow
          </p>
        </div>

        <div className="absolute left-[-30%] top-[32%] w-32">
          <p className="text-right">
            Things you{" "}
            <span className="text-[#f6dd7c] font-bold"> must know</span> about
            luncswap
          </p>
        </div>

        {/* bottom left */}
        <div className="absolute left-[-28%] bottom-[-10%] w-40 bg-gray-500/30 p-2 rounded-lg backdrop-blur-sm border-solid border border-sky-100/30">
          <p className="text-center">
            <span className="text-[#f6dd7c] font-bold"> Maintained </span> Our
            Developer Keep update with new tech to keep swap reliable
          </p>
        </div>

        <div className="absolute left-[10%] bottom-[-5%] w-40">
          <p>
            What makes luncswap{" "}
            <span className="text-[#f6dd7c] font-bold">different</span>?
          </p>
        </div>

        {/* right top */}
        <div className="absolute right-[-28%] top-[20%] w-32">
          <p>
            Why <span className="text-[#f6dd7c] font-bold">choose</span>{" "}
            luncswap?
          </p>
        </div>

        <div className="absolute right-[-28%] top-[31%] w-40 bg-gray-500/30 p-2 rounded-lg backdrop-blur-sm border-solid border border-sky-100/30">
          <p className="text-center">
            <span className="text-[#f6dd7c] font-bold">Easy to Use</span> Our
            swap is easy to use even your new in crypto world
          </p>
        </div>
      </div>
    </div>
  );
}
