import React from 'react';
import styles from './Header.module.scss'
import logOutIcon from '../../assests/logout_icon.png'
import {useDispatch} from "react-redux";
import {logOutAc} from "../../redux/reducers/authReducer";

const Header = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutAc())
        window.localStorage.removeItem('auth')
    }
    return (
        <div className={styles.header}>
            <div><h1>Simple Hotel Check</h1></div>
            <div className={styles.logOut}
                 onClick={logOut}>
                <span>Выйти</span>
                <img src={logOutIcon} alt=""/>
            </div>
        </div>
    );
};

export default Header;