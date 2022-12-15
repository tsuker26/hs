import styles from './FavoritesBlock.module.scss'
import s from '../HotelSearch.module.scss'
import Select from './Select'
import { useSelector } from 'react-redux'
import { useFavoritesHotels } from '../../../hooks/useFavoritesHotels'

const FavoritesBlock = ({ dateFormat }) => {
	const { favoritesHotels } = useSelector(state => state?.hotels)
	const { sortName, sortBy } = useSelector(state => state?.sort)

	const hotels = useFavoritesHotels(
		favoritesHotels,
		sortName,
		sortBy,
		dateFormat
	)

	return (
		<div className={`${styles.favorites_block} ${s.block}`}>
			<h1 style={{ textAlign: 'start' }}>Избранное</h1>
			{hotels?.length ? (
				<>
					<Select />
					<div className={styles.favorites}>{hotels}</div>
				</>
			) : (
				<h1 style={{ marginTop: '20px' }}>У вас нет избранных отелей</h1>
			)}
		</div>
	)
}

export default FavoritesBlock
