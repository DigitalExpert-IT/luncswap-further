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
      <span className="md:block hidden">
        <div className="flex flex-row justify-end items-center gap-6">
          {NAVIGATIONS.map(({ label, href }) => (
            <MenuItem key={label + href} label={label} href={href} />
          ))}

          <WalletConnection />
        </div>
      </span>

      <span className="md:hidden">
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
                  <MenuItem key={label + href} label={label} href={href} />
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

function MenuItem({ label, href }: { label: string; href: string }) {
  return (
    <a
      key={href}
      href={href}
      className="block font-medium text-base text-white"
    >
      {label}
    </a>
  );
}
