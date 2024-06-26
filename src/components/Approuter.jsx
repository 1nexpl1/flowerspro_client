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
import Profile from "./Profile/Profile.jsx";

const Approuter = (props) => {

  const { user } = useContext(Context)
  const Auth = user.isAuth
  const Admin = user.isAdmin
  return (
    <>
    {
      Admin ? (
        <Routes>
          <Route path="/*" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage addItem={props.addItem} toggleCart={props.toggleCart}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage addItem={props.addItem} toggleCart={props.toggleCart} click={props.click}/>} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/ship" element={<ShipPage />} />
          <Route path="/admin" element={<AdminPage />} />         
          <Route path="/profile" element={<Profile logout={props.logout}/>} />
          <Route path="/catalog/:id" element={<ItemPage addItem={props.addItem} toggleCart={props.toggleCart}/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage addItem={props.addItem} toggleCart={props.toggleCart}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage addItem={props.addItem} toggleCart={props.toggleCart} click={props.click}/>} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/ship" element={<ShipPage />} />
          <Route path="/profile" element={<Profile logout={props.logout}/>} />
          <Route path="/catalog/:id" element={<ItemPage addItem={props.addItem} toggleCart={props.toggleCart}/>} />
        </Routes>
      )
    }
  </>
  );
};

export default Approuter;
