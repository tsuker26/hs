import styles from './HotelsBlock.module.scss'
import arrow from '../../../assests/arrow.png'
import { useDispatch, useSelector } from 'react-redux'
import FavoritesBlock from '../FavotitesBlock/FavoritesBlock'
import { setModalAc } from '../../../redux/reducers/modalReducer'
import { dateFormatCreate } from '../../../utils/date'

const FavoriteAmount = () => {
	const dispatch = useDispatch()
	const { favoritesHotels } = useSelector(state => state?.hotels)
	const { date } = useSelector(state => state?.search)

	const dateFormat = dateFormatCreate(date)
	const favoritesHotelsDate = favoritesHotels.filter(
		hotel => hotel.date === dateFormat
	)
	return (
		<div className={styles.add_count}>
			<p>
				Добавлено в Избранное: <span>{favoritesHotelsDate.length}</span> отеля
				<img
					className={styles.open_modal}
					onClick={() =>
						dispatch(
							setModalAc({
								active: true,
								body: (
									<FavoritesBlock favoritesHotelsDate={favoritesHotelsDate} />
								),
							})
						)
					}
					src={arrow}
					alt=''
				/>
			</p>
		</div>
	)
}

export default FavoriteAmount
