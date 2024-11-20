import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";
import KidsPage from "../pages/KidsPage";
import ElectronicsPage from "../pages/ElectronicsPage";
import ShoesPage from "../pages/ShoesPage";
import ProductDetailsCard from "../components/cards/ProductDetailsCard";
import App from "../App";
import AddToCart from "../pages/AddToCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "men",
        element: <MenPage />,
      },
      {
        path: "women",
        element: <WomenPage />,
      },
      {
        path: "kids",
        element: <KidsPage />,
      },
      {
        path: "electronics",
        element: <ElectronicsPage />,
      },
      {
        path: "shoes",
        element: <ShoesPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailsCard />,
      },
      {
        path: "/cart",
        element: <AddToCart />,
      },
    ],
  },
]);
