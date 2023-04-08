import React from 'react'
import styles from './HotelsBlock.module.scss'
import HotelEl from '../HotelEl'
import { useSelector } from 'react-redux'

const HotelsItems = ({ dateFormat }) => {
	const { allHotels } = useSelector(state => state?.hotels)

	return (
		<div className={styles.hotels_items}>
			{allHotels.map(hotel => (
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
