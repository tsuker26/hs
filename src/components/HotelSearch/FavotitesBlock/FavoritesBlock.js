import React from 'react';
import styles from "./FavoritesBlock.module.scss";
import s from '../HotelSearch.module.scss'
import Filter from "./Filter";
import {useSelector} from "react-redux";
import HotelEl from "../HotelEl";


const FavoritesBlock = ({dateFormat}) => {

    const {favoritesHotels} = useSelector(state => state?.hotels)

    return (
        <div className={`${styles.favorites_block} ${s.block}`}>
            <h1 style={{textAlign: "start"}}>Избранное</h1>
            {favoritesHotels.length ?
                <>
                    <Filter/>
                    <div className={styles.favorites}>
                        {favoritesHotels?.map(hotel => <HotelEl key={hotel.id}
                                                                hotel={hotel}
                                                                allHotels={false}
                                                                dateFormat={dateFormat}/>)}
                    </div>
                </>
                : <h1 style={{marginTop: '20px'}}>У вас нет избранных отелей</h1>}
        </div>
    );
};

export default FavoritesBlock;