import { useEffect } from 'react'
import Select from '../../UI/Select/Select'
import { sortItems } from '../../../data'
import styles from './FavoritesBlock.module.scss'
import HotelEl from '../HotelEl'
import { useFavoritesHotels } from '../../../hooks/useFavoritesHotels'
import { useSelector } from 'react-redux'
import { dateFormatCreate } from '../../../utils/date'

const FavoriteItems = () => {
	const { sortName, sortBy } = useSelector(state => state?.sort)
	const { date } = useSelector(state => state?.search)
	const { favoritesHotels } = useSelector(state => state?.hotels)
	const dateFormat = dateFormatCreate(date)
	const hotels = useFavoritesHotels(
		favoritesHotels,
		sortName,
		sortBy,
		dateFormat
	)
	useEffect(() => {
		localStorage.setItem('favoriteHotels', JSON.stringify(favoritesHotels))
	}, [favoritesHotels])
	return (
		<>
			{hotels?.length ? (
				<>
					<Select sortItems={sortItems} />
					<div className={styles.favorites}>
						{hotels.map(hotel => (
							<HotelEl key={hotel.hotelId} hotel={hotel} allHotels={false} />
						))}
					</div>
				</>
			) : (
				<h1 style={{ marginTop: '20px' }}>У вас нет избранных отелей</h1>
			)}
		</>
	)
}

export default FavoriteItems
