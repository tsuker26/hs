import {memo} from 'react'
import styles from './FavoritesBlock.module.scss'
import SelectEl from './SelectEl'

const Filter = memo(() => {
	const filterItems = [
		{ sort: 'stars', name: 'Рейтинг' },
		{ sort: 'priceAvg', name: 'Цена' },
	]
	return (
		<div className={styles.filter}>
			{filterItems.map(filter => (
				<SelectEl key={filter.sort} filter={filter} />
			))}
		</div>
	)
})

export default Filter
