import React from "react";
import Title from "../components/UI/Title/Title";
import Ship from "../components/Ship/Ship";
import ShipIndivid from "../components/ShipIndivid/ShipIndivid";
import HoverContact from "../components/HoverContact/HoverContact";

const ShipPage = () => {
  return (
    <div className="shipWrapper">
      <Title>Доставка</Title>
      <div className="shipContent">
        <div className="subTitleShip">Доставка букетов по г. Верхняя Пышма</div>

        <div className="shipDescrip">
          Доставка осуществляется ежедневно с 06:00 до 00:00 ч. в выбранный вами
          интервал.
          <p />
          <p />
          Компания Flowers Pro предлагает на выбор 3 вида интервала доставки:
          четырехчасовой, часовой и доставку к точному времени. Интервал
          доставки - это параметр точности доставки, временной промежуток
          ожидания, в который прибудет ваш заказ.
        </div>

        <Ship />
        <ShipIndivid />
      </div>
      <HoverContact />
    </div>
  );
};

export default ShipPage;