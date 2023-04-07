import styles from './HotelSearch.module.scss'
import starFull from '../../assests/starsFull.png'
import starNull from '../../assests/starsNull.png'

const Stars = ({ stars }) => {
	const noStars = 5 - stars
	const starArr = [...new Array(stars)]
	const noStarArr = [...new Array(noStars)]
	const starArrMap = starArr.map((_, i) => (
		<img key={i} src={starFull} alt='' />
	))
	const noStarArrMap = noStarArr.map((_, i) => (
		<img key={i} src={starNull} alt='' />
	))
	if (stars === 5) {
		return <div className={styles.stars}>{starArrMap}</div>
	}

	return (
		<div className={styles.stars}>
			{starArrMap}
			{noStarArrMap}
		</div>
	)
}

export default Stars
