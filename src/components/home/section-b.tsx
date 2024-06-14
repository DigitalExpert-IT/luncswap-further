import { Button } from "../ui/button";
import { CARD } from "@/constant/dummy";

export function SectionB() {
  return (
    // view
    <div className="section-b">
      <div className="card-wrapper">
        {CARD.map((item, idx) => (
          <div className="card-wrapper-item" key={idx}>
            <img src={item.image} alt="burn" className="card-images" />
            <div className="bg-gradient-to-t from-black z-10 flex flex-col text-center h-full place-content-end pb-5 space-y-2 absolute w-full">
              <h1 className="text-2xl uppercase font-bold">{item.title}</h1>
              <span>{item.description}</span>
              <a href={item.url}>
                <Button className="capitalize">{item.button}</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
