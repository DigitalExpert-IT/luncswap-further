export function SectionB() {
  return (
    // view
    <div className="section-b">
      {/* card image */}
      <div className="card-image">
        <img
          src="https://ik.imagekit.io/msxxxaegj/Luncswap/swap.png?updatedAt=1706092359001"
          alt="swap-card"
        />
        {/* pop up */}
        {/* left top */}
        <div className="popup-card-left-top">
          <p className="card-title">Super Burn</p>
          <p>Giving You DeFi Superpowers</p>
        </div>

        <div className="popup-slug-left-top">
          <p>
            Things you <span> must know</span> about luncswap
          </p>
        </div>

        {/* bottom left */}
        <div className="popup-card-bottom-left">
          <p className="card-title">Fuel LUNC&apos;s Rise</p>
          <p>
            Each swap includes a 1.5% burn tax, boosting LUNC&apos;s value and
            stability
          </p>
        </div>

        <div className="popup-slug-left-bottom">
          <p>
            What makes luncswap{" "}
            <span className="text-[#f6dd7c] font-bold">different</span>?
          </p>
        </div>

        {/* right top */}
        <div className="popup-slug-right-top">
          <p>Build Project choose?</p>
        </div>

        <div className="popup-card-right-top">
          <p className="card-title">Elevate Together</p>
          <p>swap is easy to use even your new in crypto world</p>
        </div>
      </div>
    </div>
  );
}
