import Toast from "../components/toast";
import ToastContainer from "../components/toast-container";
import {
  EnumAppEvent,
  EnumToastPosition,
  EnumToastType,
} from "../types/react-hot-toast.enum";
import { IToast } from "../types/react-hot-toast.type";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { publishAppEvent, subscribeAppEvent } from "../utils/app-event";

interface ReactHotToastContextType {
  toasts: IToast[];
  addToast: (args: {
    id?: string;
    context: any;
    type: EnumToastType;
    duration?: number;
  }) => void;
  dismissToast: (toastId: string) => void;
}

const ReactHotToastContext = createContext<
  ReactHotToastContextType | undefined
>(undefined);

interface ReactHotToastProviderProps {
  children: ReactNode;
  duration?: number;
  position?: `${EnumToastPosition}`;
}

export const ReactHotToastProvider = ({
  children,
  duration = 2000,
  position = `${EnumToastPosition.TOP_RIGHT}`,
}: ReactHotToastProviderProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  function addToast(args: {
    id?: string;
    context: any;
    type: EnumToastType;
    duration?: number;
  }) {
    const newToast: IToast = {
      id: args.id || uuidv4(),
      content: args.context,
      type: args.type,
    };

    if (args.duration) {
      newToast.config = { duration: args.duration };
    }
    setToasts((prev) => [...prev, newToast]);

    // Publish event when toast is added
    publishAppEvent({
      event: EnumAppEvent.ADD_TOAST,
      detail: newToast,
    });
  }

  function dismissToast(toastId: string) {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  }

  // Auto dismiss toast after duration using event listener
  useEffect(() => {
    const onAddToastListener = subscribeAppEvent({
      eventName: EnumAppEvent.ADD_TOAST,
      callback: (event: any) => {
        const toast = event.detail as IToast;
        setTimeout(
          () => {
            dismissToast(toast.id);
          },
          toast.config?.duration ? toast.config.duration : duration
        );
      },
    });

    return () => {
      onAddToastListener.unsubscribe();
    };
  }, []);

  return (
    <ReactHotToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      <ToastContainer toasts={toasts} position={`${position}`} />
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
