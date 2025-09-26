import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactHotToastProvider } from "react-hot-toast";
import Toaster from "react-hot-toast/dist/components/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactHotToastProvider duration={3000} position="top-right">
      <App />
      <Toaster />
    </ReactHotToastProvider>
  </StrictMode>
);
