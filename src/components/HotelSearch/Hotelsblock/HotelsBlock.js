import React, {useState} from 'react';
import styles from "./HotelsBlock.module.scss";
import s from '../HotelSearch.module.scss'
import arrow from '../../../assests/arrow.png'
import Carousel from "./Carousel";
import HotelEl from "../HotelEl";


const HotelsBlock = () => {
    const [hotels] =
        useState(
            ['Moscow Marriott Grand Hotel','Moscow Marriott Grand Hotel', 'Moscow Marriott Grand Hotel', 'Moscow Marriott Grand Hotel',  'Moscow Marriott Grand Hotel', 'Moscow Marriott Grand Hotel', 'Moscow Marriott Grand Hotel', 'Moscow Marriott Grand Hotel'])
    return (
        <div className={`${styles.hotels_block} ${s.block}`}>
            <div className={styles.info}>
                <span>Отели<img src={arrow} alt=""/>Москва</span>
                <span className={styles.date}>07 июля 2020</span>
            </div>
            <Carousel/>
            <div className={styles.add_count}>
                <p>Добавлено в Избранное: <span>3</span> отеля</p>
            </div>
           <div className={styles.hotels}>
               {hotels.map(h=><HotelEl allHotel={true} name={h}/>)}
           </div>

        </div>
    );
};

export default HotelsBlock;