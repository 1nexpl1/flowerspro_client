import React from 'react'
import s from './QRSteps.module.css'
const QRSteps = () => {
  return (
    <div className={s.shipWrapper}>
      <div className={s.block}>
        <div className={s.title}>1</div>
        <div className={s.desc}>
          Оформить заказ на нашем сайте
        </div>
      </div>
      <div className={s.block}>
        <div className={s.title}>2</div>
        <div className={s.desc}>
          Мы свяжемся с вами и уточним ваши пожелания по созданию плееру
        </div>
      </div>
      <div className={s.block}>
        <div className={s.title}>3</div>
        <div className={s.desc}>
            Дождаться своего букета и наслаждаться вашей композицией
        </div>
      </div>
    </div>
  )
}

export default QRSteps