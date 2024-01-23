import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { FileProvider } from "./contexts/FileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FileProvider>
      <App classname="App" />
    </FileProvider>
  </React.StrictMode>
);
