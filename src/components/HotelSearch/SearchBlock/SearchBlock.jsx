import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './SearchBlock.module.scss'
import s from '../HotelSearch.module.scss'
import MyInput from '../../UI/MyInput/MyInput'
import MyButton from '../../UI/MyButton/MyButton'
import { changeInfoAc } from '../../../redux/reducers/searchReducer'
import { getHotelsAc } from '../../../redux/reducers/hotelsReducer'
import { Formik } from 'formik'
import { validationsSchema } from '../../../utils/validationSchemas'
import { dateOutCount } from '../../../utils/dateOutCount'

const SearchBlock = () => {
	const { location, date, countDay } = useSelector(state => state.search)
	const dispatch = useDispatch()
	const validate = validationsSchema('search')

	return (
		<div className={`${styles.search_block} ${s.block}`}>
			<Formik
				initialValues={{ location, date, countDay }}
				validationSchema={validate}
				onSubmit={values => {
					const dateOut = dateOutCount(values.date, values.countDay)
					console.log(values.date)
					dispatch(
						getHotelsAc({
							location: values.location,
							date: values.date,
							dateOut,
						})
					)
					dispatch(
						changeInfoAc({
							location: values.location,
							date: values.date,
							countDay: values.countDay,
						})
					)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<div>
							<MyInput
								type='text'
								name='location'
								label='Локация'
								placeholder={'Введите город'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.location}
								error={errors.location && touched.location}
								errorMessage={errors.location}
							/>
						</div>
						<div className={styles.date}>
							<MyInput
								type='date'
								name='date'
								label='Дата заселения'
								placeholder={'Введите дату'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.date}
								error={errors.date && touched.date}
								errorMessage={errors.date}
							/>
						</div>
						<div className={styles.count_day}>
							<MyInput
								type='text'
								name='countDay'
								label='Количество дней'
								placeholder={'Введите количетво дней'}
								onChange={handleChange}
								value={values.countDay}
								error={errors.countDay && touched.countDay}
								errorMessage={errors.countDay}
							/>
						</div>
						<div className={styles.btn}>
							<MyButton type={'submit'}>Найти</MyButton>
						</div>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default SearchBlock
