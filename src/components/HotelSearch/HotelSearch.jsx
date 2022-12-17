import React from 'react'
import styles from './HotelSearch.module.scss'
import FavoritesBlock from './FavotitesBlock/FavoritesBlock'
import SearchBlock from './SearchBlock/SearchBlock'
import HotelsBlock from './HotelsBlock/HotelsBlock'
import { useSelector } from 'react-redux'
import { dateFormatCreate } from '../../utils/date'

const HotelSearch = () => {
	const { date } = useSelector(state => state?.search)
	const { favoritesHotels } = useSelector(state => state?.hotels)
	const dateFormat = dateFormatCreate(date)
	const favoritesHotelsDate = favoritesHotels.filter(
		hotel => hotel.date === dateFormat
	)
	return (
		<div className={styles.hotel_search_block}>
			<SearchBlock />
			<FavoritesBlock
				dateFormat={dateFormat}
				favoritesHotelsDate={favoritesHotelsDate}
			/>
			<HotelsBlock
				dateFormat={dateFormat}
				favoritesHotelsDate={favoritesHotelsDate}
			/>
		</div>
	)
}

export default HotelSearch
