import React, { useContext, useEffect, useState } from "react";
import Item from "../components/Item/Item";
import Title from "../components/UI/Title/Title";
import Filter from "../components/Filter/Filter";
import DeviceStore from "../store/DeviceStore";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/DeviceAPI";
import { Context } from "..";
import BouquetList from "../components/BouquetList/BouquetList";
import { Spinner } from "react-bootstrap";
import HoverContact from "../components/HoverContact/HoverContact";
import { observer } from "mobx-react-lite";
import FilterMobile from "../components/FilterMobile/FilterMobile";

const CatalogPage = observer((props) => {
  const  mediaQuerry = window.matchMedia('(max-width:550px)')
  const { device } = useContext(Context)
  return (
    <div className="catalogWrapper">
      <Title>Каталог</Title>
      <div className="catalogWrapperContent">
        {mediaQuerry.matches ? (
          <FilterMobile click={props.click}/>
        ):(
          <div className="catalogFilter">
          <Filter click={props.click}/>
          </div>
        )}
        <div className="catalogItems">
          <BouquetList toggleCart={props.toggleCart} addItem={props.addItem} />
        </div>
      </div>
      <HoverContact />
    </div>
  );
});

export default CatalogPage;
