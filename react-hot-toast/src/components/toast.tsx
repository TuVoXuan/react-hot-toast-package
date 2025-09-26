import { EnumToastType } from "../types/react-hot-toast.enum";
import { IToast } from "../types/react-hot-toast.type";
import { Check, TriangleAlert, X, LoaderCircle } from "lucide-react";

interface ToastProps {
  toast: IToast;
}

export default function Toast({ toast }: ToastProps) {
  const { type, content } = toast;

  const renderIcon = () => {
    switch (type) {
      case EnumToastType.SUCCESS:
        return (
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-500">
            <Check className="size-4 text-white" />
          </div>
        );
      case EnumToastType.ERROR:
        return (
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-red-400">
            <X className="size-4 text-white" />
          </div>
        );
      case EnumToastType.WARNING:
        return (
          <div className="flex items-center justify-center h-5 w-5 rounded-full">
            <TriangleAlert className="size-4 text-yellow-500" />
          </div>
        );
      case EnumToastType.LOADING:
        return (
          <div className="flex items-center justify-center h-5 w-5 rounded-full animate-spin">
            <LoaderCircle className="size-4 text-black" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row items-center gap-x-2 w-fit p-3 rounded-md shadow-md bg-white text-black text-sm">
      {renderIcon()}
      {content}
    </div>
  );
}
