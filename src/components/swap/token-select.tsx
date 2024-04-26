import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Modal } from "../ui/modal";

export const TokenSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="token-select" onClick={() => setOpen(true)}>
        <div>
          <span>Token Select</span>
        </div>

        <ChevronDown />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h1 className="text-black/80">Hello</h1>
      </Modal>
    </div>
  );
};
