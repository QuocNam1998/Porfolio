import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReactContextProvider } from "./store/ReactContext/ReactContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactContextProvider>
      <App />
    </ReactContextProvider>
  </React.StrictMode>
);
