import React from "react";
import s from "./About.module.css";
const About = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <div className={s.text}>
          <div className={s.title}>Flowers Pro</div>
          <div className={s.descrip}>
            - это история о любви к цветам, ко всему прекрасному. Это желание
            нести эту красоту в массы, сделать ее доступной для каждого. Проект
            создавался с осознанием того, что стильный красивый букет не
            обязательно должен стоить дорого.
          </div>
        </div>
        <div className={s.imageWrapper}>
          <img src="https://placehold.co/500x400" alt="" />
        </div>
      </div>
      <div className={s.block}>
        <div className={s.text}>
          <div className={s.title}>Команда Flowers Pro</div>
          <div className={s.descrip}>
            - это союз творческих людей, любящих свое дело. Порушив изначально
            классическую концепцию букета и собрав её заново в собственном
            формате, наши флористы раз за разом удивляют заказчиков в Москве и
            Санкт-Петербурге. Свежие и стильные букеты и композиции, удобная
            оплата и отлаженная доставка - все это Вы легко найдете на нашем
            сайте. Мы работаем каждый день, чтобы радовать вас и ваших близких.
          </div>
        </div>
        <div className={s.imageWrapper}>
          <img src="https://placehold.co/500x400" alt="" />
        </div>
      </div>
      <div className={s.block}>
        <div className={s.text}>
          <div className={s.title}>Идеальный букет для нас</div>
          <div className={s.descrip}>
            - это свежие цветы отличного качества, собранные профессиональными
            флористами, бережно упакованные в стильную натуральную упаковку для
            транспортировки и украшенные декоративными лентами.
            <p />
            Мы постоянно обновляем нашу коллекцию букетов и композиций в
            зависимости от сезона, находимся в поиске интересных сортов и
            решений, следуем новейшим флористическим тенденциям!
          </div>
        </div>
        <div className={s.imageWrapper}>
          <img src="https://placehold.co/500x400" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
