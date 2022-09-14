import React from 'react';
import {useFormik} from "formik";

import styles from './AuthForm.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";

const AuthForm = () => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    })
    return (
        <form className={styles.form_auth} onSubmit={formik.handleSubmit}>
            <h1>Simple Hotel Check</h1>
            <div className={styles.email_block}>
                <label htmlFor="email">Логин</label>
                <MyInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className={styles.password_block}>
                <label htmlFor="password">Пароль</label>
                <MyInput
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>

            <div className={styles.btn_submit}>
                <MyButton type="submit">Войти</MyButton>
            </div>
        </form>
    );
};

export default AuthForm;