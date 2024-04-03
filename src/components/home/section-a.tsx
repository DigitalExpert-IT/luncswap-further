import { Button } from "@/components/ui/button";

export function SectionA() {
  return (
    <div className="section-a">
      <div className="inner">
        <div className="heading">
          <h1>
            A DEX exclusively created for{" "}
            <span className="punch">LUNA CLASSIC $LUNC</span>
          </h1>
          <p>
            Every Swap Is a Step Towards Higher LUNC Value. Swap Now, Burn 1.5%,
            and Watch Our LUNC Reach New Heights.
          </p>
          <div>
            <Button className="text-lg" size="lg">
              Launch app
            </Button>
          </div>
        </div>
        <img
          className="illustration"
          src="https://ik.imagekit.io/msxxxaegj/Luncswap/rabbit-bull.png?updatedAt=1712160475269"
          alt="bull-rabit"
        />
      </div>
    </div>
  );
}
