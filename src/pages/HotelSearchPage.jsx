import React from 'react'
import HotelSearch from '../components/HotelSearch/HotelSearch'
import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsAc } from '../redux/reducers/hotelsReducer'
import { dateOutCount } from '../utils/dateOutCount'

const HotelSearchPage = () => {
	const dispatch = useDispatch()
	const { locationInput, dateInput, countDayInput } = useSelector(
		state => state.search
	)

	const dateOut = dateOutCount(dateInput, countDayInput)

	useEffect(() => {
		dispatch(getHotelsAc({ locationInput, dateInput, dateOut }))
	}, [])
	return (
		<div className={'hotel_search_page'}>
			<Header />
			<HotelSearch dateOut={dateOut} />
		</div>
	)
}

export default HotelSearchPage
