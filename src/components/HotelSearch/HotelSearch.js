import React from 'react';
import styles from './HotelSearch.module.scss'
import FavoritesBlock from "./FavoritesBlock";
import SearchBlock from "./SearchBlock";
import HotelsBlock from "./HotelsBlock";

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