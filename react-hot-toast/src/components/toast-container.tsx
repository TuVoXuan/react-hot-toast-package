import reactDOM from "react-dom";
import { IToast } from "../types/react-hot-toast.type";
import Toast from "./toast";
import { EnumToastPosition } from "../types/react-hot-toast.enum";

interface ToastContainerProps {
  toasts: IToast[];
  position?: `${EnumToastPosition}`;
}

export default function ToastContainer({
  toasts,
  position = EnumToastPosition.TOP_RIGHT,
}: ToastContainerProps) {
  const portalRoot = document.getElementById("react-hot-toast-portal");
  if (!portalRoot) return;

  const getPositionClasses = () => {
    switch (position) {
      case EnumToastPosition.TOP_LEFT:
        return "top-2 left-2 items-start";
      case EnumToastPosition.TOP_RIGHT:
        return "top-2 right-2 items-end";
      case EnumToastPosition.BOTTOM_LEFT:
        return "bottom-2 left-2 items-start";
      case EnumToastPosition.BOTTOM_RIGHT:
        return "bottom-2 right-2 items-end";
      case EnumToastPosition.TOP_CENTER:
        return "top-2 left-1/2 transform -translate-x-1/2 items-center";
      case EnumToastPosition.BOTTOM_CENTER:
        return "bottom-2 left-1/2 transform -translate-x-1/2 items-center";
      default:
        return "top-2 right-2 items-end";
    }
  };

  return reactDOM.createPortal(
    <div className={"flex flex-col gap-y-2 fixed" + " " + getPositionClasses()}>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>,
    portalRoot
  );
}
