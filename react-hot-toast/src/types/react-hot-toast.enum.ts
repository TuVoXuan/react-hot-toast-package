export enum EnumToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  LOADING = 'loading'
}
export enum EnumToastPosition {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  TOP_CENTER = 'top-center',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  BOTTOM_CENTER = 'bottom-center'
}

export enum EnumAppEvent {
  ADD_TOAST = "react-hot-toast:add-toast",
  DISMISS_TOAST = "react-hot-toast:dismiss-toast",
}