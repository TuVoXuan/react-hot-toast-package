import { IToast } from "../types/react-hot-toast.type";

type Listener = () => void;

const toasts: IToast[] = [];
const listeners = new Set<Listener>();

export function addToast(toast: IToast) {
  toasts.push(toast);
  listeners.forEach((listener) => listener());
}

export function removeToast(toastId: string) {
  const index = toasts.findIndex((toast) => toast.id === toastId);
  if (index !== -1) {
    toasts.splice(index, 1);
    listeners.forEach((listener) => listener());
  }
}

export function getToasts() {
  return toasts;
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}