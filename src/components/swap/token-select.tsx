import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Modal } from "../ui/modal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const tokenList = new Array(10).fill({
  name: "Token Noi",
  image: "",
});

const aliases = (name: string): string => {
  const alias = name.split(/\s/).reduce((res: string, word: string) => {
    if (res.length < 2) {
      res += word.slice(0, 1);
    }
    return res;
  }, "");
  return alias;
};

export const TokenSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="token-select" onClick={() => setOpen(true)}>
        <span className="mr-2 text-sm sm:text-base">Select Token</span>
        <ChevronDown className="h-4 w-4" />
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modalHead="Token Select"
      >
        {tokenList.map((item, idx) => (
          <div
            className="flex items-center space-x-3 p-5 hover:bg-gray-500 hover:cursor-pointer"
            key={idx}
          >
            <Avatar>
              <AvatarImage src={item.image} alt={item.name} />
              <AvatarFallback>{aliases(item.name)}</AvatarFallback>
            </Avatar>
            <h1>{item.name}</h1>
          </div>
        ))}
      </Modal>
    </div>
  );
};
