import React, { useState } from "react";
import s from "./Auth.module.css";
import { IoIosArrowBack } from "react-icons/io";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
const Auth = (props) => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <>  
    {isAuth ? (
      <Registration toggle = {props.toggle} setIsAuth = {setIsAuth} toggleAuth={props.toggleAuth}/>
    ):(
      <Login toggle = {props.toggle} setIsAuth = {setIsAuth} toggleAuth={props.toggleAuth} /> 
    )}
    
    </>
  )
};

export default Auth;
