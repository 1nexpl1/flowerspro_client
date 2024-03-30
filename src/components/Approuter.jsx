import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import CatalogPage from "../pages/CatalogPage";
import PaymentPage from "../pages/PaymentPage";
import ContactsPage from "../pages/ContactsPage";
import ShipPage from "../pages/ShipPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import ItemPage from "../pages/ItemPage.jsx";
import { Context } from "../index.js";

const Approuter = (props) => {

  const { user } = useContext(Context)

  return (
    <>
    {
      user.isAuth ? (
        <Routes>
          <Route path="/*" element={<Navigate to="/catalog" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage addItem={props.addItem} toggleCart={props.toggleCart}/>} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/ship" element={<ShipPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/catalog/:id" element={<ItemPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Navigate to="/catalog" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage addItem={props.addItem} toggleCart={props.toggleCart}/>} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/ship" element={<ShipPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/catalog/:id" element={<ItemPage />} />
        </Routes>
      )
    }
  </>
  );
};

export default Approuter;
