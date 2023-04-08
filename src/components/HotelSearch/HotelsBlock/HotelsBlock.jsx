import styles from './HotelsBlock.module.scss'
import s from '../HotelSearch.module.scss'
import arrow from '../../../assests/arrow.png'
import CarouselEL from './CarouselEL'
import HotelEl from '../HotelEl'
import { useDispatch, useSelector } from 'react-redux'
import FavoritesBlock from '../FavotitesBlock/FavoritesBlock'
import { setModalAc } from '../../../redux/reducers/modalReducer'

const HotelsBlock = ({ dateFormat, favoritesHotelsDate }) => {
	const { allHotels, carouselImg } = useSelector(state => state?.hotels)
	const { location } = useSelector(state => state?.search)
	const dispatch = useDispatch()

	return (
		<div className={`${styles.hotels_block} ${s.block}`}>
			<div className={styles.info}>
				<span>
					Отели
					<img src={arrow} alt='' />
					{location}
				</span>
				<span className={styles.date}>{dateFormat}</span>
			</div>
			<div className={styles.carousel}>
				<div className={styles.carousel_inner}>
					{carouselImg.map((img, i) => (
						<CarouselEL key={i} img={img} />
					))}
				</div>
			</div>
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
										<FavoritesBlock
											dateFormat={dateFormat}
											favoritesHotelsDate={favoritesHotelsDate}
										/>
									),
								})
							)
						}
						src={arrow}
						alt=''
					/>
				</p>
			</div>
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
		</div>
	)
}

export default HotelsBlock
