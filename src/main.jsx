import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { MainRoute } from "./Routes/MainRoute.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute} />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
