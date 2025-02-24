import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TagManager from "react-gtm-module";
import { HelmetProvider } from "react-helmet-async";
// Initialize GTM
const tagManagerArgs = {
  gtmId: "GTM-P83VB9SB",
};

TagManager.initialize(tagManagerArgs);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
