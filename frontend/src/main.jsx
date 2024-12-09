import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'react-toastify/dist/ReactToastify.css';
import Router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer, Slide } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </StrictMode>
);
