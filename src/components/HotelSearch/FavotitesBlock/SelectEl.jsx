import React from 'react'
import styles from './FavoritesBlock.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import ArrowEl from './ArrowEl'
import { setFilterNameAc } from '../../../redux/reducers/filterReducer'

const SelectEl = React.memo(({ filter }) => {
	const { filterName } = useSelector(state => state.filter)
	const dispatch = useDispatch()
	const arrowItems = ['ASC', 'DESC']

	return (
		<div
			onClick={() => dispatch(setFilterNameAc(filter.sort))}
			className={`${styles.select} ${
				filter.sort === filterName ? styles.active : ''
			}`}
		>
			<span>{filter.name}</span>
			<div className={styles.arrow}>
				{arrowItems.map(arrow => (
					<ArrowEl key={arrow} arrow={arrow} filter={filter} />
				))}
			</div>
		</div>
	)
})

export default SelectEl
