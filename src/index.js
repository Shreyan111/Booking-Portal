import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { RegisterAuthContextProvider } from "./context/RegisterAuthContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RegisterAuthContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </RegisterAuthContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);