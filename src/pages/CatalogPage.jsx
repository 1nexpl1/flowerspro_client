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

const CatalogPage = observer((props) => {
  const { device } = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices(null, null).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    }).finally(() => setLoading(false))
  }, [])
  useEffect(() => {
    fetchDevices(device.selectedType, device.selectedBrand).then(data => {
        device.setDevices(data.rows)
        device.setTotalCount(data.count)
    })
}, [ device.selectedType, device.selectedBrand,])
  if (loading) {
    return <Spinner animation={"grow"} />
  }
  return (
    <div className="catalogWrapper">
      <Title>Каталог</Title>
      <div className="catalogWrapperContent">
        <div className="catalogFilter">
          <Filter />
        </div>
        <div className="catalogItems">
          <BouquetList toggleCart={props.toggleCart} addItem={props.addItem} />
        </div>
      </div>
      <HoverContact />
    </div>
  );
});

export default CatalogPage;
