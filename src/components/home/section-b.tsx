import { Button } from "../ui/button";

type CardType = {
  title: string;
  description: string;
  image: string;
  url: string;
};

type SectionBType = {
  data: CardType[];
};

export function SectionB({ data }: SectionBType) {
  return (
    // view
    <div className="section-b container">
      <div className="flex space-x-10">
        {data.map((item, idx) => (
          <div className="overflow-hidden border-2 rounded-2xl" key={idx}>
            <img
              src={item.image}
              alt="burn"
              className="object-cover w-full h-full z-0"
            />
            <div className="bg-black z-10">
              <h1>{item.title}</h1>
              <span>{item.description}</span>
              <a href={item.url}>
                <Button>Burn</Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
