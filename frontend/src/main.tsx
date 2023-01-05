import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Packge from "./pages/Packge";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
