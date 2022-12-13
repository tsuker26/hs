import React from 'react'
import styles from './HotelSearch.module.scss'
import FavoritesBlock from './FavotitesBlock/FavoritesBlock'
import SearchBlock from './SearchBlock/SearchBlock'
import HotelsBlock from './HotelsBlock/HotelsBlock'
import { useSelector } from 'react-redux'

const HotelSearch = () => {
	const { date } = useSelector(state => state?.search)

	const dateFormat = new Date(date)
		.toLocaleDateString('ru-RU', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		})
		.replace('г.', '')

	return (
		<div className={styles.hotel_search_block}>
			<SearchBlock />
			<FavoritesBlock dateFormat={dateFormat} />
			<HotelsBlock dateFormat={dateFormat} />
		</div>
	)
}

export default HotelSearch
