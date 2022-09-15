import React from 'react';
import styles from "./HotelsBlock.module.scss";
import s from'../HotelSearch.module.scss'

const HotelsBlock = () => {
    return (
        <div className={`${styles.hotels_block} ${s.block}`}>
            hotels
        </div>
    );
};

export default HotelsBlock;