import React from 'react';
import styles from "./SearchBlock.module.scss";
import s from '../HotelSearch.module.scss'
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";

import {useDispatch, useSelector} from "react-redux";
import {changeCountDayAc, changeDateAc, changeInfoAc, changeLocationAc} from "../../../redux/reducers/searchReducer";
import {getHotelsAc} from "../../../redux/reducers/hotelsReducer";

const SearchBlock = ({dateOut}) => {
    const {location, date, countDay} = useSelector(state => state.search)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getHotelsAc({location, date, dateOut}))
        dispatch(changeInfoAc({location, date, countDay}))
    }


    return (
        <div className={`${styles.search_block} ${s.block}`}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="location">Локация</label>
                    <MyInput
                        type="text"
                        id="location"
                        name="location"
                        onChange={(e) => dispatch(changeLocationAc(e.target.value))}
                        value={location}/>
                </div>
                <div className={styles.date}>
                    <label htmlFor="date">Дата заселения</label>
                    <MyInput
                        type='date'
                        id="date"
                        name="date"
                        onChange={(e) => dispatch(changeDateAc(e.target.value))}
                        value={date}/>
                </div>
                <div className={styles.count_day}>
                    <label htmlFor="count">Количество дней</label>
                    <MyInput
                        type="text"
                        id="countDay"
                        name="countDay"
                        onChange={(e) => dispatch(changeCountDayAc(e.target.value))}
                        value={countDay}/>
                </div>
                <div className={styles.btn}>
                    <MyButton type={'submit'}>Найти</MyButton>
                </div>
            </form>
        </div>
    );
};

export default SearchBlock;


