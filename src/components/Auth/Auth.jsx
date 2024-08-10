import React, { useState } from "react";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import { AnimatePresence, motion } from 'framer-motion'
const Auth = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>
      {isAuth && (
        <Registration toggle={props.toggle} setIsAuth={setIsAuth} toggleAuth={props.toggleAuth} />
      )}
      {!isAuth && (
        <Login toggle={props.toggle} setIsAuth={setIsAuth} toggleAuth={props.toggleAuth} />
      )}
    </>
  )
};

export default Auth;
