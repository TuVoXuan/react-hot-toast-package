import { IToast } from "../types/react-hot-toast.type";

type Listener = () => void;

let toasts: IToast[] = [];
const listeners = new Set<Listener>();

export function addToast(toast: IToast) {
  toasts = [...toasts, toast];
  listeners.forEach((listener) => listener());
}

export function removeToast(toastId: string) {
  toasts = toasts.filter((toast) => toast.id !== toastId);
  listeners.forEach((listener) => listener());
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