import React from 'react';
import styles from "./HotelsBlock.module.scss";
import s from '../HotelSearch.module.scss'
import arrow from '../../../assests/arrow.png'
import Carousel from "./Carousel";
import HotelEl from "../HotelEl";
import {useSelector} from "react-redux";


const HotelsBlock = ({dateFormat}) => {
    const {allHotels, favoritesHotels} = useSelector(state => state?.hotels)
    const {location} = useSelector(state => state?.search)

    return (

        <div className={`${styles.hotels_block} ${s.block}`}>
            <div className={styles.info}>
                <span>Отели<img src={arrow} alt=""/>{location}</span>
                <span className={styles.date}>{dateFormat}</span>
            </div>
            <Carousel/>
            <div className={styles.add_count}>
                <p>Добавлено в Избранное: <span>{favoritesHotels.length}</span> отеля</p>
            </div>
            <div className={styles.hotels_items}>
                {allHotels.map(hotel => <HotelEl key={hotel.id}
                                                 allHotels={true}
                                                 hotel={hotel}
                                                 dateFormat={dateFormat}/>)}
            </div>

        </div>

    );
};

export default HotelsBlock;