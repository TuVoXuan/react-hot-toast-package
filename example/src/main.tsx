import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToasterTest } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ReactHotToastProvider duration={3000} position="top-right"> */}
    <App />
    <ToasterTest />
    {/* <Toaster /> */}
    {/* </ReactHotToastProvider> */}
  </StrictMode>
);
