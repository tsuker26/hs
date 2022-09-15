import React from 'react';
import styles from './HotelSearch.module.scss'
import FavoritesBlock from "./FavotitesBlock/FavoritesBlock";
import SearchBlock from "./SearchBlock/SearchBlock";
import HotelsBlock from "./Hotelsblock/HotelsBlock";

const HotelSearch = () => {
    return (
        <div className={styles.hotel_search_block}>
            <SearchBlock/>
            <FavoritesBlock/>
            <HotelsBlock/>
        </div>
    );
};

export default HotelSearch;