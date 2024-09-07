import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import CatalogPage from "../pages/CatalogPage";
import PaymentPage from "../pages/PaymentPage";
import ContactsPage from "../pages/ContactsPage";
import ShipPage from "../pages/ShipPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import ItemPage from "../pages/ItemPage.jsx";
import { Context } from "../index.js";
import Profile from "./Profile/Profile.jsx";
import { AnimatePresence } from "framer-motion";
import QRInfo from "../pages/QRInfo.jsx";

const Approuter = (props) => {

  const { user } = useContext(Context)
  const Auth = user.isAuth
  const Admin = user.isAdmin
  
  const location = useLocation()
  return (
    <>
    <AnimatePresence mode="wait">
      {
        Admin ? (
            <Routes location={location} key={location.pathname}>
              <Route path="/*" element={<Navigate to="/main" replace />} />
              <Route path="/main" element={<MainPage addItem={props.addItem} toggleCart={props.toggleCart} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/catalog" element={<CatalogPage addItem={props.addItem} toggleCart={props.toggleCart} click={props.click} />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/ship" element={<ShipPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/qrinfo" element={<QRInfo />} />
              <Route path="/profile" element={<Profile logout={props.logout} />} />
              <Route path="/catalog/:id" element={<ItemPage addItem={props.addItem} toggleCart={props.toggleCart} />} />
            </Routes>

        ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/*" element={<Navigate to="/main" replace />} />
              <Route path="/main" element={<MainPage addItem={props.addItem} toggleCart={props.toggleCart} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/catalog" element={<CatalogPage addItem={props.addItem} toggleCart={props.toggleCart} click={props.click} />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/qrinfo" element={<QRInfo />} />
              <Route path="/ship" element={<ShipPage />} />
              <Route path="/profile" element={<Profile logout={props.logout} />} />
              <Route path="/catalog/:id" element={<ItemPage addItem={props.addItem} toggleCart={props.toggleCart} />} />
            </Routes>
        )
      }
      </AnimatePresence>
    </>
  );
};

export default Approuter;
