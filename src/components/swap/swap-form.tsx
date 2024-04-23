import "./swap.css";
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

const MenuContent = [
  {
    icon: <Settings />,
  },
  {
    icon: <BadgeDollarSign />,
  },
  {
    icon: <BarChartBig />,
  },
  {
    icon: <Flame />,
  },
  {
    icon: <History />,
  },
];

export const SwapForm = () => {
  return (
    <div className="form-box">
      <div className="head-box">
        <h1>Swap Now</h1>
      </div>
      <div className="form-icon">
        <span>Trade tokens in 1 minute.</span>
        <div className="icon-wrapper">
          {MenuContent.map((item, idx) => (
            <div className="item-icon" key={idx}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="form-body">
        <label htmlFor="html-form" className="form-body-label">
          Form
        </label>
        <div className="input-group">
          <TokenSelect />
          <input type="number" placeholder="0" min="0" />
        </div>
      </div>
      <div className="arrow-up-down">
        <ArrowUpDown />
      </div>
      <div className="form-body">
        <label htmlFor="html-form" className="form-body-label">
          To
        </label>
        <div className="input-group">
          <TokenSelect />
          <input type="number" placeholder="0" min="0" />
        </div>
      </div>
      <div className="button-wrapper">
        <Button className="text-lg w-1/2">Swap</Button>
      </div>
    </div>
  );
};
