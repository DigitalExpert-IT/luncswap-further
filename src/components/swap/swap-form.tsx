import {
  Settings,
  BadgeDollarSign,
  BarChartBig,
  Flame,
  History,
  ArrowUpDown,
} from "lucide-react";
import { TokenSelect } from "./token-select";
import { Button } from "@/components/ui/button";
import type { Dispatch, SetStateAction } from "react";
import { ICON_CONTENTS } from "@/constant/icon-content";
import { Input } from "../ui/input";

type SwapFormProps = {
  setSideContent: Dispatch<SetStateAction<string>>;
  sideContent: string;
};

const MenuContent = [
  {
    content: ICON_CONTENTS.SETTINGS,
    icon: <Settings />,
  },
  {
    content: ICON_CONTENTS.MONEY,
    icon: <BadgeDollarSign />,
  },
  {
    content: ICON_CONTENTS.GRAPH,
    icon: <BarChartBig />,
  },
  {
    content: ICON_CONTENTS.ALL_POOLS,
    icon: <Flame />,
  },
  {
    content: ICON_CONTENTS.HISTORY,
    icon: <History />,
  },
];

export const SwapForm = ({ setSideContent, sideContent }: SwapFormProps) => {
  const onClickMenu = (content: string) => {
    setSideContent(content === sideContent ? "" : content);
  };

  return (
    <div className="form-box">
      <div className="head-box">
        <h1>Swap Now</h1>
      </div>
      <div className="form-icon">
        <span>Trade tokens in 1 minute.</span>
        <div className="icon-wrapper">
          {MenuContent.map((item, idx) => (
            <div
              className={`${sideContent === item.content ? "text-yellow-700" : "text-black"} item-icon`}
              key={idx}
              onClick={() => onClickMenu(item.content)}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="form-body">
        <div className="form-wrapper">
          <label htmlFor="html-form" className="form-body-label">
            From
          </label>
          <div className="input-group">
            <TokenSelect />
            <Input
              className="form-input-item"
              placeholder="0"
              type="number"
              min="0"
            />
          </div>
        </div>
        <div className="arrow-up-down">
          <ArrowUpDown />
        </div>
        <div className="form-wrapper">
          <label htmlFor="html-form" className="form-body-label">
            To
          </label>
          <div className="input-group">
            <TokenSelect />
            <Input
              className="form-input-item"
              placeholder="0"
              type="number"
              min="0"
            />
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <Button>Swap</Button>
      </div>
    </div>
  );
};
