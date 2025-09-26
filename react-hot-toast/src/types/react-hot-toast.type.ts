import { EnumToastType } from "./react-hot-toast.enum";

export interface IToast {
  id: string,
  type: EnumToastType,
  content: any,
  config?: {
    duration?: number,
  }
}

type ToastConfig = {
  duration?: number,
  position?: `${EnumToastType}`,
  id?: string,
}

export type ToastFn = {
  (message: string, config?: ToastConfig): void;
  success: (message: string, config?: ToastConfig) => void;
  error: (message: string, config?: ToastConfig) => void;
  loading: (message: string, config?: ToastConfig) => void;
  warning: (message: string, config?: ToastConfig) => void;
  dismiss: (toastId: string) => void;
}