import React from 'react';
import styles from "./FavoritesBlock.module.scss";
import s from '../HotelSearch.module.scss'
import Filter from "./Filter";
import {useSelector} from "react-redux";
import HotelEl from "../HotelEl";


const FavoritesBlock = () => {

    const {favoritesHotels} = useSelector(state => state?.hotels)

    return (
        <div className={`${styles.favorites_block} ${s.block}`}>
            <h1 style={{textAlign: "start"}}>Избранное</h1>
            {favoritesHotels.length ?
                <>
                    <Filter/>
                    <div className={styles.favorites}>
                        {favoritesHotels?.map(hotel => <HotelEl hotel={hotel}/>)}
                    </div>
                </>
                : ""}
        </div>
    );
};

export default FavoritesBlock;