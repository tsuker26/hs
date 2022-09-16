import React from 'react';
import HotelSearch from "../components/HotelSearch/HotelSearch";
import Header from "../components/Header/Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getHotelsAc} from "../redux/reducers/hotelsReducer";

const HotelSearchPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHotelsAc())
    }, [])
    return (
        <div className={'hotel_search_page'}>
            <Header/>
            <HotelSearch/>
        </div>
    );
};

export default HotelSearchPage;