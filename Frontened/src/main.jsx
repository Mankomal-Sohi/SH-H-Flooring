import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.jsx";
import "./index.css";
import "./App.css";
import Carpet from "./Components/Carpet.jsx";
import CarpetTile from "./Components/CarpetTile.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Reviews from "./Components/Reviews.jsx";
import ShopAtHome from "./Components/ShopAtHome.jsx";
import Location from "./Components/Location.jsx";
import ThankYou from "./Components/ThankYou.jsx";
import CarpetDetail from "./Components/CarpetDetail.jsx";
import CarpetInstallation from "./Components/CarpetInstallation.jsx";
import Form from "./Components/Form.jsx";
import HardwoodInstallation from "./Components/HardwoodInstallation.jsx";
import LaminateInstallation from "./Components/LaminateInstallation.jsx";
import HardwoodDetail from "./Components/HardwoodDetail.jsx";
import Hardwood from "./Components/Hardwood.jsx";
import CarpetTileDetail from "./Components/CarpetTileDetail.jsx";
import Laminate from "./Components/Laminate.jsx";
import Vinyl from "./Components/Vinyl.jsx";
import VinylDetail from "./Components/VinylDetail.jsx";
import LaminateDetail from "./Components/LaminateDetail.jsx";
import Paint from "./Components/Paint.jsx";
import ResidentialPainting from "./Components/ResidentialPainting.jsx";
import VinylInstallation from "./Components/VinylInstallation.jsx";
import Services from "./Components/Services.jsx";

import AdminHome from "./Components/AdminHome.jsx";
import Login from "./Components/login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="carpet" element={<Carpet />} />
      <Route path="carpetTile" element={<CarpetTile />} />
      <Route path="Form" element={<Form />} />
      <Route path="HardwoodInstallation" element={<HardwoodInstallation />} />
      <Route path="CarpetInstallation" element={<CarpetInstallation />} />
      <Route path="Reviews" element={<Reviews />} />
      <Route path="Login" element={<Login />} />
      <Route path="ShopAtHome" element={<ShopAtHome />} />
      <Route path="Location" element={<Location />} />
      <Route path="ThankYou" element={<ThankYou />} />
      <Route path="Hardwood" element={<Hardwood />} />
      <Route path="Laminate" element={<Laminate />} />
      <Route path="LaminateInstallation" element={<LaminateInstallation />} />
      <Route path="VinylInstallation" element={<VinylInstallation />} />
      <Route path="ResidentialPainting" element={<ResidentialPainting />} />
      <Route path="Paint" element={<Paint />} />
      <Route path="Vinyl" element={<Vinyl />} />
      <Route path="/carpet/:id" element={<CarpetDetail />} />
      <Route path="/vinyl/:id" element={<VinylDetail />} />
      <Route path="/hardwood/:id" element={<HardwoodDetail />} />
      <Route path="/carpetTile/:id" element={<CarpetTileDetail />} />
      <Route path="/laminate/:id" element={<LaminateDetail />} />
      <Route path="Services" element={<Services />} />
      <Route path="AdminHome" element={<AdminHome />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
