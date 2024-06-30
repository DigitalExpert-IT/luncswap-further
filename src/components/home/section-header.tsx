import "./home.css";
import { Banner } from "../ui/banner";
import { Button } from "@/components/ui/button";

export function SectionHeader() {
  return (
    <div className="section-a">
      <img
        src="https://ik.imagekit.io/msxxxaegj/Luncswap/jering.png?updatedAt=1715000183520"
        className="absolute w-screen opacity-50 z-[-1] aspect-[1.9]"
      />
      <div className="container">
        <div className="banner-wrapper">
          <Banner />
        </div>
        <div className="inner">
          <img srcSet="https://ik.imagekit.io/msxxxaegj/Luncswap/logoWBlink.png?updatedAt=1715000553428" />
          <div className="head-wrapper">
            <span className="head-title">
              A DEX exclusively created for <span>LUNACLASSIC</span> is here.
            </span>
            <div className="button-wrapper">
              <Button>Connect Wallet</Button>
              <a href="/swap">
                <Button className="second-button">Swap Now</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
