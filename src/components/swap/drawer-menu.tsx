import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

type DrawerMenu = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
};

export const DrawerMenu = ({ title, children, isOpen }: DrawerMenu) => {
  return (
    <Drawer open={isOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title.replace(/_/g, " ")}</DrawerTitle>
        </DrawerHeader>
        <div>{children}</div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant={"primary"}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
