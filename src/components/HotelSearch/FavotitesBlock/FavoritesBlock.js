import React, {useMemo} from 'react';
import styles from "./FavoritesBlock.module.scss";
import s from '../HotelSearch.module.scss'
import Filter from "./Filter";
import {useSelector} from "react-redux";
import HotelEl from "../HotelEl";


const FavoritesBlock = ({dateFormat}) => {

        const {favoritesHotels} = useSelector(state => state?.hotels)
        const {filterName, arrowName} = useSelector(state => state?.filter)

        const favoritesHotelsSort = useMemo(() => {
            return [...favoritesHotels]
                .sort((a, b) => arrowName === 'ASC'
                    ? a[filterName] > b[filterName] ? 1
                    : -1 : a[filterName] > b[filterName] ? -1 : 1)
        }, [favoritesHotels, filterName, arrowName])

        return (
            <div className={`${styles.favorites_block} ${s.block}`}>
                <h1 style={{textAlign: "start"}}>Избранное</h1>
                {favoritesHotelsSort.length ?
                    <>
                        <Filter/>
                        <div className={styles.favorites}>
                            {favoritesHotelsSort?.map(hotel => <HotelEl key={hotel.hotelId}
                                                                        hotel={hotel}
                                                                        allHotels={false}
                                                                        dateFormat={dateFormat}/>)}
                        </div>
                    </>
                    : <h1 style={{marginTop: '20px'}}>У вас нет избранных отелей</h1>}
            </div>
        );
    }
;

export default FavoritesBlock;