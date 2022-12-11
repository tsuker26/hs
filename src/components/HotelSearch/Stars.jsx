import { useMemo } from 'react'
import styles from './HotelSearch.module.scss'
import starFull from '../../assests/starsFull.png'
import starNull from '../../assests/starsNull.png'

const Stars = ({ stars }) => {
	const noStars = 5 - stars
	const starArr = [...new Array(stars)]
	const noStarArr = [...new Array(noStars)]
	const starArrMemo = useMemo(() => {
		return starArr.map((_, i) => <img key={i} src={starFull} alt='' />)
	}, [starArr])
	const noStarArrMemo = useMemo(() => {
		return noStarArr.map((_, i) => <img key={i} src={starNull} alt='' />)
	}, [noStarArr])
	if (stars === 5) {
		return <div className={styles.stars}>{starArrMemo}</div>
	}

	return (
		<div className={styles.stars}>
			{starArrMemo}
			{noStarArrMemo}
		</div>
	)
}

export default Stars
