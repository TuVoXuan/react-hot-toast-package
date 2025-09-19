import { EnumToastType } from "../types/react-hot-toast.enum";
import { IToast } from "../types/react-hot-toast.type";
import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ReactHotToastContextType {
  toasts: IToast[];
  addToast: (args: { id?: string; context: any; type: EnumToastType }) => void;
  dismissToast: (toastId: string) => void;
}

const ReactHotToastContext = createContext<
  ReactHotToastContextType | undefined
>(undefined);

export const ReactHotToastProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  function addToast(args: { id?: string; context: any; type: EnumToastType }) {
    const newToast: IToast = {
      id: args.id || uuidv4(),
      content: args.context,
      type: args.type,
    };
    setToasts((prev) => [...prev, newToast]);
  }

  function dismissToast(toastId: string) {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  }

  return (
    <ReactHotToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ReactHotToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ReactHotToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ReactHotToastProvider");
  }
  return context;
};
