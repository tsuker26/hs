import React, { useEffect } from 'react'
import HotelSearch from '../components/HotelSearch/HotelSearch'
import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsAc } from '../redux/reducers/hotelsReducer'
import { dateOutCalc } from '../utils/date'
import Modal from '../components/UI/Modal/Modal'

const HotelSearchPage = () => {
	const dispatch = useDispatch()
	const { location, date, countDay } = useSelector(state => state.search)
	const { body } = useSelector(state => state.modal)
	const dateOut = dateOutCalc(date, countDay)
	useEffect(() => {
		dispatch(getHotelsAc({ location, date, dateOut }))
	}, [])

	return (
		<div className={'hotel_search_page'}>
			<Header />
			<HotelSearch />
			<Modal>{body}</Modal>
		</div>
	)
}

export default HotelSearchPage
