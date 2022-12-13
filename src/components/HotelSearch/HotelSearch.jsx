import React from 'react'
import styles from './HotelSearch.module.scss'
import FavoritesBlock from './FavotitesBlock/FavoritesBlock'
import SearchBlock from './SearchBlock/SearchBlock'
import HotelsBlock from './HotelsBlock/HotelsBlock'
import { useSelector } from 'react-redux'
import { dateFormatCreate } from '../../utils/date'

const HotelSearch = () => {
	const { date } = useSelector(state => state?.search)

	const dateFormat = dateFormatCreate(date)

	return (
		<div className={styles.hotel_search_block}>
			<SearchBlock />
			<FavoritesBlock dateFormat={dateFormat} />
			<HotelsBlock dateFormat={dateFormat} />
		</div>
	)
}

export default HotelSearch
