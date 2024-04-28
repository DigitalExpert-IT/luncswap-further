import { X } from "lucide-react";
import React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  modalHead: string;
  children: React.ReactNode;
};

export const Modal = ({ open, onClose, children, modalHead }: ModalProps) => {
  return (
    <div
      className={`z-50 backdrop-blur-sm fixed inset-0 overscroll-contain overflow-hidden flex justify-center transisition-colors ${open ? "visible bg-black/40" : "invisible"}`}
    >
      <div onClick={onClose} className="relative w-screen h-screen" />
      <div
        className={`absolute bg-white max-h-[calc(80vh-5em)] h-min rounded-xl shadow-2xl transition-all w-4/5 lg:w-1/2 top-10 ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <div className="bg-yellow-400 rounded-t-xl p-5 justify-between flex">
          <h1 className="text-black uppercase font-bold">{modalHead}</h1>
          <X className="cursor-pointer text-black" onClick={onClose} />
        </div>
        <div className="overflow-y-auto h-min max-h-[calc(50vh-5em)]">
          {children}
        </div>
      </div>
    </div>
  );
};
