import styles from './FavoritesBlock.module.scss'
import s from '../HotelSearch.module.scss'
import Filter from './Filter'
import { useSelector } from 'react-redux'
import { useFavoritesHotels } from '../../../hooks/useFavoritesHotels'

const FavoritesBlock = ({ dateFormat }) => {
	const { favoritesHotels } = useSelector(state => state?.hotels)
	const { filterName, arrowName } = useSelector(state => state?.filter)

	const hotels = useFavoritesHotels(
		favoritesHotels,
		filterName,
		arrowName,
		dateFormat
	)

	return (
		<div className={`${styles.favorites_block} ${s.block}`}>
			<h1 style={{ textAlign: 'start' }}>Избранное</h1>
			{hotels?.length ? (
				<>
					<Filter />
					<div className={styles.favorites}>{hotels}</div>
				</>
			) : (
				<h1 style={{ marginTop: '20px' }}>У вас нет избранных отелей</h1>
			)}
		</div>
	)
}

export default FavoritesBlock
