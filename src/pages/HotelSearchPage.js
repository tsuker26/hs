import React from 'react';
import {useDispatch} from "react-redux";
import {logOutAc} from "../redux/reducers/authReducer";

const HotelSearchPage = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logOutAc())
        window.localStorage.removeItem('auth')
    }
    return (
        <div onClick={logOut}>
            Hotel Search
        </div>
    );
};

export default HotelSearchPage;