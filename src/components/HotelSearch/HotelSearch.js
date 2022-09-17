import React from 'react';
import styles from './HotelSearch.module.scss'
import FavoritesBlock from "./FavotitesBlock/FavoritesBlock";
import SearchBlock from "./SearchBlock/SearchBlock";
import HotelsBlock from "./Hotelsblock/HotelsBlock";
import {useSelector} from "react-redux";

const HotelSearch = ({dateOut}) => {
    const {info} = useSelector(state => state?.search)

    const dateFormat = new Date(info.date)
        .toLocaleDateString('ru-RU', {day: '2-digit', month: 'long', year: 'numeric'})
        .replace('г.', '')

    return (
        <div className={styles.hotel_search_block}>
            <SearchBlock dateOut={dateOut}/>
            <FavoritesBlock  dateFormat={dateFormat}/>
            <HotelsBlock dateFormat={dateFormat}/>
        </div>
    );
};

export default HotelSearch;