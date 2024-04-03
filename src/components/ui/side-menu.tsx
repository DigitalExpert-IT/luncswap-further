import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WalletConnection } from "@/components/wallet";
import { SITENAME } from "@/constant/config";
import { MenuIcon } from "lucide-react";

const NAVIGATIONS = [
  {
    label: "Swap",
    href: "/",
  },
] as const;

export function SideMenu() {
  return (
    <div>
      <span className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <SheetHeader>
              <SheetTitle>
                <img
                  className="max-h-[40px]"
                  src="/lunclogo.png"
                  alt={SITENAME}
                />
              </SheetTitle>
            </SheetHeader>
            <div className="flex-1">
              <div className="flex flex-col mt-4">
                {NAVIGATIONS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="block font-medium text-base text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <WalletConnection />
          </SheetContent>
        </Sheet>
      </span>
    </div>
  );
}
