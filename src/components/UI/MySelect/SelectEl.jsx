import { memo } from 'react'
import styles from './MySelect.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import ArrowEl from './ArrowEl'
import { setSortNameAc } from '../../../redux/reducers/sortReducer'
import { sortByItems } from '../../../data'

const SelectEl = memo(({ sortItem }) => {
	const { sortName } = useSelector(state => state.sort)
	const dispatch = useDispatch()

	return (
		<div
			onClick={() => dispatch(setSortNameAc(sortItem.sort))}
			className={`${styles.select} ${
				sortItem.sort === sortName ? styles.active : ''
			}`}
		>
			<span>{sortItem.name}</span>
			<div className={styles.arrow}>
				{sortByItems.map(sortBy => (
					<ArrowEl key={sortBy} sortByItem={sortBy} sortItem={sortItem} />
				))}
			</div>
		</div>
	)
})

export default SelectEl
