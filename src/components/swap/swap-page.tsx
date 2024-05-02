import "./swap.css";
import React, { useState } from "react";
import { SwapForm } from "./swap-form";
import { ICON_CONTENTS } from "@/constant/icon-content";
import { AllPool } from "./all-pool";
import { useScreen } from "@/hooks";
import { Drawer } from "../ui/drawer";
import { DrawerMenu } from "./drawer-menu";
Drawer;

export const SwapPage = () => {
  const [sideContent, setSideContent] = useState("");
  const { isMobile } = useScreen();

  const SideMenuContent = () => {
    switch (sideContent) {
      case ICON_CONTENTS.ALL_POOLS:
        if (isMobile) {
          return (
            <DrawerMenu title={sideContent} isOpen>
              <AllPool />
            </DrawerMenu>
          );
        } else {
          return <AllPool />;
        }
      default:
        return null;
    }
  };
  return (
    <div className="swap-page">
      <div className="swap-page-item">
        <SwapForm setSideContent={setSideContent} sideContent={sideContent} />
        <SideMenuContent />
      </div>
    </div>
  );
};
