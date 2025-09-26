import { IToast } from "../types/react-hot-toast.type";
import { Check } from "lucide-react";

interface ToastProps {
  toast: IToast;
}

export default function Toast({ toast }: ToastProps) {
  return (
    <div className="flex flex-row items-center gap-x-2 w-fit p-3 rounded-md shadow-md bg-white text-black text-sm">
      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-500">
        <Check className="size-4 text-white" />
      </div>
      {toast.content}
    </div>
  );
}
