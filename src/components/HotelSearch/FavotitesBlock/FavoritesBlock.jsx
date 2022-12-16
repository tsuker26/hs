import styles from './FavoritesBlock.module.scss'
import s from '../HotelSearch.module.scss'
import MySelect from '../../UI/MySelect/MySelect'
import { useSelector } from 'react-redux'
import { useFavoritesHotels } from '../../../hooks/useFavoritesHotels'
import { sortItems } from '../../../data'

const FavoritesBlock = ({ dateFormat, favoritesHotelsDate }) => {
	const { sortName, sortBy } = useSelector(state => state?.sort)
	const { active } = useSelector(state => state?.modal)

	const hotels = useFavoritesHotels(
		favoritesHotelsDate,
		sortName,
		sortBy,
		dateFormat
	)

	return (
		<div
			className={
				active
					? `${styles.modal_favorites_block} ${s.block} `
					: `${styles.favorites_block} ${s.block}`
			}
		>
			<h1 style={{ textAlign: 'start' }}>Избранное</h1>
			{hotels?.length ? (
				<>
					<MySelect sortItems={sortItems} />
					<div className={styles.favorites}>{hotels}</div>
				</>
			) : (
				<h1 style={{ marginTop: '20px' }}>У вас нет избранных отелей</h1>
			)}
		</div>
	)
}

export default FavoritesBlock
