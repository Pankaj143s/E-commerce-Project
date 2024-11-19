import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { ProductProvider } from "../context/ProductContext";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <RouterProvider router={router} />
  </ProductProvider>
);
