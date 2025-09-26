import { useEffect, useSyncExternalStore } from "react";
import { v4 as uuidv4 } from "uuid";
import ToastContainer from "../components/toast-container";
import { addToast, getToasts, removeToast, subscribe } from "../store";
import {
  EnumAppEvent,
  EnumToastPosition,
  EnumToastType,
} from "../types/react-hot-toast.enum";
import { IToast, ToastFn } from "../types/react-hot-toast.type";
import { publishAppEvent, subscribeAppEvent } from "../utils/app-event";

document.body
  .appendChild(document.createElement("div"))
  .setAttribute("id", "react-hot-toast-portal");

const toast = ((message, config) => {
  const newToast: IToast = {
    id: config?.id || uuidv4(),
    content: message,
    type: EnumToastType.DEFAULT,
  };

  if (config?.duration) {
    newToast.config = { duration: config.duration };
  }
  addToast(newToast);
  publishAppEvent({
    event: EnumAppEvent.ADD_TOAST,
    detail: newToast,
  });
}) as ToastFn;

toast.success = (message, config) => {
  const newToast: IToast = {
    id: config?.id || uuidv4(),
    content: message,
    type: EnumToastType.SUCCESS,
  };

  if (config?.duration) {
    newToast.config = { duration: config.duration };
  }
  addToast(newToast);
  publishAppEvent({
    event: EnumAppEvent.ADD_TOAST,
    detail: newToast,
  });
};

toast.error = (message, config) => {
  const newToast: IToast = {
    id: config?.id || uuidv4(),
    content: message,
    type: EnumToastType.ERROR,
  };

  if (config?.duration) {
    newToast.config = { duration: config.duration };
  }
  addToast(newToast);
  publishAppEvent({
    event: EnumAppEvent.ADD_TOAST,
    detail: newToast,
  });
};

toast.loading = (message, config) => {
  const newToast: IToast = {
    id: config?.id || uuidv4(),
    content: message,
    type: EnumToastType.LOADING,
  };

  if (config?.duration) {
    newToast.config = { duration: config.duration };
  }
  addToast(newToast);
  publishAppEvent({
    event: EnumAppEvent.ADD_TOAST,
    detail: newToast,
  });
};

toast.warning = (message, config) => {
  const newToast: IToast = {
    id: config?.id || uuidv4(),
    content: message,
    type: EnumToastType.WARNING,
  };

  if (config?.duration) {
    newToast.config = { duration: config.duration };
  }
  addToast(newToast);
  publishAppEvent({
    event: EnumAppEvent.ADD_TOAST,
    detail: newToast,
  });
};

toast.dismiss = (toastId) => {
  removeToast(toastId);
};

interface ToasterProps {
  duration?: number;
  position?: `${EnumToastPosition}`;
}

export function Toaster({
  duration = 2000,
  position = "top-right",
}: ToasterProps) {
  const toastsState = useSyncExternalStore(subscribe, getToasts);

  useEffect(() => {
    const onAddToastListener = subscribeAppEvent({
      eventName: EnumAppEvent.ADD_TOAST,
      callback: (event: any) => {
        const toastData = event.detail as IToast;
        setTimeout(
          () => {
            toast.dismiss(toastData.id);
          },
          toastData.config?.duration ? toastData.config.duration : duration
        );
      },
    });

    return () => {
      onAddToastListener.unsubscribe();
    };
  }, []);

  return <ToastContainer toasts={toastsState} position={position} />;
}

export default toast;
