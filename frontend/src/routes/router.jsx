import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";
import KidsPage from "../pages/KidsPage";
import ElectronicsPage from "../pages/ElectronicsPage";
import ShoesPage from "../pages/ShoesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
    ],
  },
]);
