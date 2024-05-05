import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./Navbar.module.css";
import logo from "../../images/logoflowers.png";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useHover, useToggle } from "@uidotdev/usehooks";
import CatalogNav from "../CatalogNav/CatalogNav";
import Cart from "../Cart/Cart";
import Auth from "../Auth/Auth";
import { Context } from "../..";
import { MdLogout } from "react-icons/md";
import { observer } from "mobx-react-lite";
import { NavDropdown } from "react-bootstrap";
import { motion } from "framer-motion"
import { NavMobile } from "../NavMobile/NavMobile";
const Navbar = observer((props) => {
  const [openAuth, toggleAuth] = useToggle();
  const [ref, hovering] = useHover();
  const router = useNavigate();
  const [isAuth, setIsAuth] = useState()
  const { user } = useContext(Context)
  const mediaQuerry = window.matchMedia("(max-width: 990px)")
  useEffect(() => {
    setIsAuth(user.isAuth)
  }, [user.isAuth])
  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  


  return (
    
    <>
      <div className={s.wrapper}>
        <div className={s.navbar}>
          {mediaQuerry.matches ? (
            <NavMobile />
          ):(
            <>
              <Link className={s.link} to="/main">
                Главная
              </Link>
              <Link className={s.linkCatalog} to="/catalog" ref={ref}>
                <div className={s.link}>Каталог</div>
                {hovering ? <CatalogNav click = {props.click}/> : <></>}
              </Link>
              <Link className={s.link} to="/payment">
                Оплата
              </Link>
              <Link className={s.link} to="/ship">
                Доставка
              </Link>
              <Link className={s.link} to="/about">
                О нас
              </Link>
              <Link className={s.link} to="/contacts">
                Контакты
              </Link>
            </>
          )}           
        </div>
        <div className={s.logoWrapper}>
          <img
            onClick={() => router(`/about`)}
            src={logo}
            alt=""
            className={s.logo}
          />
        </div>
        <div className={s.icons}>
          <div className={s.link}>
            {isAuth ? <FaRegUser className={s.icon} onClick={() => router(`/profile`)} /> : <MdLogout className={s.icon} onClick={toggleAuth} />}

            {openAuth ? <Auth toggle={toggleAuth} /> : <></>}
          </div>
          <div className={s.cart}>
            <FaShoppingCart className={s.icon} onClick={props.toggleCart} />
            {props.openCart ? (
              <Cart
                deleteItem={props.deleteItem}
                items={props.items}
                toggle={props.toggleCart}
                sum={props.sum}
                setSum={props.setSum}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default Navbar;
