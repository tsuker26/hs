import React from 'react';
import styles from "./HotelsBlock.module.scss";
import s from '../HotelSearch.module.scss'
import arrow from '../../../assests/arrow.png'
import Carousel from "./Carousel";
import HotelEl from "../HotelEl";
import {useSelector} from "react-redux";


const HotelsBlock = () => {
    const {allHotels,favoritesHotels} = useSelector(state => state?.hotels)
    const {location,date} = useSelector(state => state?.search)

    return (

        <div className={`${styles.hotels_block} ${s.block}`}>
            <div className={styles.info}>
                <span>Отели<img src={arrow} alt=""/>{location}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <Carousel/>
            <div className={styles.add_count}>
                <p>Добавлено в Избранное: <span>{favoritesHotels.length}</span> отеля</p>
            </div>
            <div className={styles.hotels_items}>
                {allHotels.map(hotel => <HotelEl key={hotel.id}
                                              allHotel={true}
                                              hotel={hotel}/>)}
            </div>

        </div>

    );
};

export default HotelsBlock;