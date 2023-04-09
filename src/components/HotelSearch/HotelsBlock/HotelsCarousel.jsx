import styles from './HotelsBlock.module.scss'
import CarouselEL from './CarouselEL'
import { useSelector } from 'react-redux'

const HotelsCarousel = () => {
	const { carouselImg } = useSelector(state => state?.hotels)

	return (
		<div className={styles.carousel}>
			<div className={styles.carousel_inner}>
				{carouselImg.map((img, i) => (
					<CarouselEL key={i} img={img} />
				))}
			</div>
		</div>
	)
}

export default HotelsCarousel
