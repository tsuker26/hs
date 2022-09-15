import React from 'react';
import HotelSearch from "../components/HotelSearch/HotelSearch";
import Header from "../components/Header/Header";

const HotelSearchPage = () => {

    return (
        <div className={'hotel_search_page'}>
            <Header/>
            <HotelSearch/>
        </div>
    );
};

export default HotelSearchPage;