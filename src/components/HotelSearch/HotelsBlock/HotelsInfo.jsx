import styles from './HotelsBlock.module.scss'
import arrow from '../../../assests/arrow.png'
import { useSelector } from 'react-redux'
import { dateFormatCreate } from '../../../utils/date'

const HotelsInfo = () => {
	const { location, date } = useSelector(state => state?.search)
	const dateFormat = dateFormatCreate(date)
	return (
		<div className={styles.info}>
			<span>
				Отели
				<img src={arrow} alt='' />
				{location}
			</span>
			<span className={styles.date}>{dateFormat}</span>
		</div>
	)
}

export default HotelsInfo
