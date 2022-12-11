import {useMemo} from 'react'
import styles from './HotelsBlock.module.scss'
import s from '../HotelSearch.module.scss'
import arrow from '../../../assests/arrow.png'
import CarouselEL from './CarouselEL'
import HotelEl from '../HotelEl'
import { useSelector } from 'react-redux'

const HotelsBlock = ({ dateFormat }) => {
	const { allHotels, favoritesHotels, carouselImg } = useSelector(
		state => state?.hotels
	)
	const { info } = useSelector(state => state?.search)

	const hotelsMemo = useMemo(()=>{
		return allHotels.map(hotel => (
			<HotelEl
				key={hotel.hotelId}
				allHotels={true}
				hotel={hotel}
				dateFormat={dateFormat}
			/>
		))
	},[allHotels])
	return (
		<div className={`${styles.hotels_block} ${s.block}`}>
			<div className={styles.info}>
				<span>
					Отели
					<img src={arrow} alt='' />
					{info.location}
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
					Добавлено в Избранное: <span>{favoritesHotels.length}</span> отеля
				</p>
			</div>
			<div className={styles.hotels_items}>
				{hotelsMemo}
			</div>
		</div>
	)
}

export default HotelsBlock
