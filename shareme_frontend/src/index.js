import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="990907820531-mjk8tkc4p7o0b10m33f2rp48mtdtr133.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
