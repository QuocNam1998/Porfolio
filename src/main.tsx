import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReactContextProvider } from "./store/ReactContext/ReactContext.tsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactContextProvider>
      <ToastContainer />
      <App />
    </ReactContextProvider>
  </React.StrictMode>
);
