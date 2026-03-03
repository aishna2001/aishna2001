import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* =========================
   GLOBAL FETCH TOKEN SETUP
========================= */

const originalFetch = window.fetch;

window.fetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  options.headers = {
    ...(options.headers || {}),
    Authorization: token ? `Bearer ${token}` : "",
  };

  return originalFetch(url, options);
};

/* =========================
   APP RENDER
========================= */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
