import React from 'react';
import styles from "./HotelSearch.module.scss";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const SearchBlock = () => {
    return (
        <div className={`${styles.search_block} ${styles.block}`}>
            <div className={styles.location}>
                <label htmlFor="location">Локация</label>
                <MyInput/>
            </div>
            <div className={styles.date}>
                <label htmlFor="Date">Дата заселения</label>
                <MyInput
                    type='date'/>
            </div>
            <div className={styles.count_day}>
                <label htmlFor="count">Количество дней</label>
                <MyInput/>
            </div>
           <div className={styles.btn}>
               <MyButton>Найти</MyButton>
           </div>
        </div>
    );
};

export default SearchBlock;