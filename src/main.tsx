import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./main.css";

const element = document.getElementById("root");

if (element === null) {
  throw new Error("Could not find root element");
}

const root = createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
