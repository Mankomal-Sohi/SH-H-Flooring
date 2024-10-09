import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Carpet from "./Components/Carpet.jsx";
import CarpetTile from "./Components/CarpetTile.jsx";
import Home from "./Components/Home.jsx";
import "./index.css";
import KitchenRemodeling from "./Components/KitchenRemodeling.jsx";
import BathroomRemodeling from "./Components/BathroomRemodeling.jsx";
import Header from "./Components/Header.jsx";
import Financing from "./Components/Financing.jsx";
import Reviews from "./Components/Reviews.jsx";
import ResidentialPainting from "./Components/ResidentialPainting.jsx";
import Inspiration from "./Components/Inspiration.jsx";
import Contact from "./Components/Contact.jsx";
import Location from "./Components/Location.jsx";
import Services from "./Components/Services.jsx";
import ShopAtHome from "./Components/ShopAtHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "carpet",
        element: <Carpet />,
      },
      {
        path: "carpetTile",
        element: <CarpetTile />,
      },
      {
        path: "KitchenRemodeling",
        element: <KitchenRemodeling />,
      },
      {
        path: "BathroomRemodeling",
        element: <BathroomRemodeling />,
      },
      {
        path: "Header",
        element: <Header />,
      },
      {
        path: "Financing",
        element: <Financing />,
      },
      {
        path: "Location",
        element: <Location />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Reviews",
        element: <Reviews />,
      },
      {
        path: "ResidentialPainting",
        element: <ResidentialPainting />,
      },
      {
        path: "ShopAtHome",
        element: <ShopAtHome />,
      },
      {
        path: "Inspiration",
        element: <Inspiration />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
