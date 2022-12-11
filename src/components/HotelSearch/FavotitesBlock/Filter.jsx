import { useMemo } from 'react'
import styles from './FavoritesBlock.module.scss'
import SelectEl from './SelectEl'

const Filter = () => {
	const filterItems = [
		{ sort: 'stars', name: 'Рейтинг' },
		{ sort: 'priceAvg', name: 'Цена' },
	]
	const filtersMemo = useMemo(() => {
		return filterItems.map(filter => (
			<SelectEl key={filter.sort} filter={filter} />
		))
	}, [filterItems])
	return <div className={styles.filter}>{filtersMemo}</div>
}

export default Filter
