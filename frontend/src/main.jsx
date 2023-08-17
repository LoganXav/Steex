import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import { Provider as ReduxProvider } from "react-redux";
// import store from "configs/StoreConfig";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ReduxProvider store={store}> */}
        <App />
      {/* </ReduxProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
