import { EnumAppEvent } from "../types/react-hot-toast.enum";

type PublishAppEvent = {
  event: EnumAppEvent;
  detail?: any;
};

type SubscribeAppEvent = {
  eventName: EnumAppEvent;
  callback: (event: any) => void;
};

export const subscribeAppEvent = ({
  eventName,
  callback,
}: SubscribeAppEvent) => {
  document.addEventListener(eventName, callback);
  return {
    unsubscribe: () => {
      document.removeEventListener(eventName, callback);
    },
  };
};

export const publishAppEvent = ({ event, detail }: PublishAppEvent) => {
  document.dispatchEvent(new CustomEvent(event, { detail }));
};
