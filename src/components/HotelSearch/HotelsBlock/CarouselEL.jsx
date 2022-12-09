import React from 'react'
import styles from './HotelsBlock.module.scss'

const CarouselEL = ({ img }) => {
	return (
		<div className={styles.carousel_item}>
			<img src={`/carousel/${img}`} alt='' />
		</div>
	)
}

export default CarouselEL
