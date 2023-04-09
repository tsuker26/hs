import React from 'react'
import HotelSearch from '../components/HotelSearch/HotelSearch'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import Modal from '../components/UI/Modal/Modal'

const HotelSearchPage = () => {
	const { body } = useSelector(state => state.modal)
	return (
		<div className={'hotel_search_page'}>
			<Header />
			<HotelSearch />
			<Modal>{body}</Modal>
		</div>
	)
}

export default HotelSearchPage
