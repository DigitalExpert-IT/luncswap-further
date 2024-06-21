import { Button } from "../ui/button";
import { CARD } from "@/constant/dummy";

export function SectionB() {
  return (
    <div className="section-b">
      <div className="card-wrapper">
        {CARD.map((item, idx) => (
          <div className="card-wrapper-item" key={idx}>
            <img src={item.image} alt="burn" className="card-images" />
            <div className="card-content">
              <h1 className="card-title">{item.title}</h1>
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
