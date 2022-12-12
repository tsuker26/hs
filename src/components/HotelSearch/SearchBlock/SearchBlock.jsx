import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './SearchBlock.module.scss'
import s from '../HotelSearch.module.scss'
import MyInput from '../../UI/MyInput/MyInput'
import MyButton from '../../UI/MyButton/MyButton'
import {
	changeCountDayAc,
	changeDateAc,
	changeInfoAc,
	changeLocationAc,
} from '../../../redux/reducers/searchReducer'
import { getHotelsAc } from '../../../redux/reducers/hotelsReducer'

const SearchBlock = ({ dateOut }) => {
	const { locationInput, dateInput, countDayInput } = useSelector(
		state => state.search
	)
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(getHotelsAc({ locationInput, dateInput, dateOut }))
		dispatch(
			changeInfoAc({
				location: locationInput,
				date: dateInput,
				countDay: countDayInput,
			})
		)
	}
	return (
		<div className={`${styles.search_block} ${s.block}`}>
			<form onSubmit={handleSubmit}>
				<div>
					<MyInput
						type='text'
						name='location'
						label='Локация'
						onChange={e => dispatch(changeLocationAc(e.target.value))}
						value={locationInput}
					/>
				</div>
				<div className={styles.date}>
					<MyInput
						type='date'
						name='date'
						label='Дата заселения'
						onChange={e => dispatch(changeDateAc(e.target.value))}
						value={dateInput}
					/>
				</div>
				<div className={styles.count_day}>
					<MyInput
						type='text'
						name='countDay'
						label='Количество дней'
						onChange={e => dispatch(changeCountDayAc(e.target.value))}
						value={countDayInput}
					/>
				</div>
				<div className={styles.btn}>
					<MyButton type={'submit'}>Найти</MyButton>
				</div>
			</form>
		</div>
	)
}

export default SearchBlock
