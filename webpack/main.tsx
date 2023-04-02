import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./app";

const container = document.getElementById("root");

const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<App />);