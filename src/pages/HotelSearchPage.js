import React from 'react';
import HotelSearch from "../components/HotelSearch/HotelSearch";
import Header from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getHotelsAc} from "../redux/reducers/hotelsReducer";

const HotelSearchPage = () => {
    const dispatch = useDispatch()
    const {location, date, countDay} = useSelector(state => state.search)
    const setDay= new Date(date).setDate(new Date(date).getDate() + +countDay)
    const dateOut  = new Date(setDay).toISOString().split('T')[0]

    useEffect(() => {
        dispatch(getHotelsAc({location, date, dateOut}))
    }, [])
    return (
        <div className={'hotel_search_page'}>
            <Header/>
            <HotelSearch dateOut={dateOut}/>
        </div>
    );
};

export default HotelSearchPage;


