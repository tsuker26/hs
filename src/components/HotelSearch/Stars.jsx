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

	return (
		<div className={styles.stars}>
			{stars === 5 ? (
				<div className={styles.stars}>{starArrMap}</div>
			) : (
				<>
					{starArrMap}
					{noStarArrMap}
				</>
			)}
		</div>
	)
}

export default Stars
