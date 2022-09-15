import React from 'react';
import styles from "./SearchBlock.module.scss";
import s from'../HotelSearch.module.scss'
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import {useFormik} from "formik";

const SearchBlock = () => {

    const formik = useFormik({
        initialValues:{
            location:'Москва',
            date:new Date().toISOString().split('T')[0],
            countDay:'1'
        },
        onSubmit:values => {
            console.log(values.date)
        }
    })

    return (
        <div className={`${styles.search_block} ${s.block}`}>
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <label htmlFor="location">Локация</label>
                    <MyInput
                        type="text"
                        id="location"
                        name="location"
                        onChange={formik.handleChange}
                        value={formik.values.location}/>
                </div>
                <div className={styles.date}>
                    <label htmlFor="date">Дата заселения</label>
                    <MyInput
                        type='date'
                        id="date"
                        name="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}/>
                </div>
                <div className={styles.count_day}>
                    <label htmlFor="count">Количество дней</label>
                    <MyInput
                        type="text"
                        id="countDay"
                        name="countDay"
                        onChange={formik.handleChange}
                        value={formik.values.countDay}/>
                </div>
                <div className={styles.btn}>
                    <MyButton>Найти</MyButton>
                </div>
            </form>
        </div>
    );
};

export default SearchBlock;