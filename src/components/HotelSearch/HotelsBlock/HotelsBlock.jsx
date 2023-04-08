import styles from './HotelsBlock.module.scss'
import s from '../HotelSearch.module.scss'
import HotelsInfo from './HotelsInfo'
import HotelsCarousel from './HotelsCarousel'
import FavoriteAmount from './FavoriteAmount'
import HotelsItems from './HotelsItems'

const HotelsBlock = () => {
	return (
		<div className={`${styles.hotels_block} ${s.block}`}>
			<HotelsInfo />
			<HotelsCarousel />
			<FavoriteAmount />
			<HotelsItems />
		</div>
	)
}

export default HotelsBlock
