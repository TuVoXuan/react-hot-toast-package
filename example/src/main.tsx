import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactHotToastProvider } from "react-hot-toast";
import Toaster from "react-hot-toast/dist/components/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactHotToastProvider>
      <App />
      <Toaster />
    </ReactHotToastProvider>
  </StrictMode>
);
