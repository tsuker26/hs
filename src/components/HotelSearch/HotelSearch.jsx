import React from 'react'
import styles from './HotelSearch.module.scss'
import FavoritesBlock from './FavotitesBlock/FavoritesBlock'
import SearchBlock from './SearchBlock/SearchBlock'
import HotelsBlock from './HotelsBlock/HotelsBlock'
import { useDispatch, useSelector } from 'react-redux'
import { dateOutCalc } from '../../utils/date'
import { useEffect } from 'react'
import { getHotelsAc } from '../../redux/reducers/hotelsReducer'

const HotelSearch = () => {
	const dispatch = useDispatch()
	const { location, date, countDay } = useSelector(state => state.search)
	const dateOut = dateOutCalc(date, countDay)
	useEffect(() => {
		dispatch(getHotelsAc({ location, date, dateOut }))
	}, [])
	return (
		<div className={styles.hotel_search_block}>
			<SearchBlock />
			<FavoritesBlock />
			<HotelsBlock />
		</div>
	)
}

export default HotelSearch
