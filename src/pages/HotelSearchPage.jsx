import React from 'react'
import HotelSearch from '../components/HotelSearch/HotelSearch'
import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsAc } from '../redux/reducers/hotelsReducer'
import { dateOutCount } from '../utils/dateOutCount'

const HotelSearchPage = () => {
	const dispatch = useDispatch()
	const { location, date, countDay } = useSelector(state => state.search)
	const dateOut = dateOutCount(date, countDay)

	useEffect(() => {
		dispatch(getHotelsAc({ location, date, dateOut }))
	}, [])
	return (
		<div className={'hotel_search_page'}>
			<Header />
			<HotelSearch />
		</div>
	)
}

export default HotelSearchPage
