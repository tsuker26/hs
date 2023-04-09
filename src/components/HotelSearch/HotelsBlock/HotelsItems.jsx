import React from 'react'
import styles from './HotelsBlock.module.scss'
import HotelEl from '../HotelEl'
import { useSelector } from 'react-redux'
import Loader from '../../UI/Loader/Loader'

const HotelsItems = ({ dateFormat }) => {
	const { allHotels, isLoading, error } = useSelector(state => state?.hotels)
	return (
		<div className={styles.hotels_items}>
			{error && <div className={styles.hotels_error}>{error}</div>}
			{isLoading && <Loader size={'150'} marginTop={'100'} />}
			{!isLoading &&
				allHotels.map(hotel => (
					<HotelEl
						key={hotel.hotelId}
						allHotels={true}
						hotel={hotel}
						dateFormat={dateFormat}
					/>
				))}
		</div>
	)
}

export default HotelsItems
