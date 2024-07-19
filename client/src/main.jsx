import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./store/auth.jsx";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat:500,700', 'sans-serif'],
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
