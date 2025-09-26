import { EnumToastType } from "./react-hot-toast.enum";

export interface IToast {
  id: string,
  type: EnumToastType,
  content: any,
  config?: {
    duration?: number,
  }
}