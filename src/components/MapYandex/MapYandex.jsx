import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from './MapYandex.module.css'
const MapYandex = () => {
    // <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/flowerspro/128645552362/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">FlowersPro</a><a href="https://yandex.ru/maps/20720/verhnyaya-pyshma/category/flower_shop/184108325/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Магазин цветов в Верхней Пышме</a><a href="https://yandex.ru/maps/20720/verhnyaya-pyshma/category/flowers_and_bouquets_delivery/184108319/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Доставка цветов и букетов в Верхней Пышме</a><iframe src="https://yandex.ru/map-widget/v1/?ll=60.604821%2C56.974560&mode=poi&poi%5Bpoint%5D=60.596286%2C56.975951&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D128645552362&z=16.42" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>

    return (
        <div className={s.map}>
            <YMaps>
                <Map defaultState={{ center: [56.896142, 60.595718], zoom: 10 }}  width = {'100%'} height={'100%'}  >
                    <Placemark geometry={[56.976020, 60.596504]} />
                    <Placemark geometry={[56.816265, 60.594933]} />
                </Map>
            </YMaps>
        </div>
    )
}

export default MapYandex