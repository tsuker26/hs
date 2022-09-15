import React, {useState} from 'react';
import styles from "./FavoritesBlock.module.scss";
import s from'../HotelSearch.module.scss'
import Filter from "./Filter";
import HotelEl from "../HotelEl";


const FavoritesBlock = () => {

    const [hotels] = useState(['Moscow Marriott Grand Hotel','Moscow Marriott Grand Hotel','Moscow Marriott Grand Hotel'])

    return (
        <div className={`${styles.favorites_block} ${s.block}`}>
            <h1 style={{textAlign: "start"}}>Избранное</h1>
            <Filter/>
            <div className={styles.favorites}>
                {hotels.map(h=><HotelEl name={h}/>)}
            </div>
        </div>
    );
};

export default FavoritesBlock;