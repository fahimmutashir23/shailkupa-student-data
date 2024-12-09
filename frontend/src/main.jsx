import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </StrictMode>
);
