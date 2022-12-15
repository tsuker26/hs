import { useMemo } from 'react'
import styles from './FavoritesBlock.module.scss'
import SelectEl from './SelectEl'

const Select = () => {
	const sortItems = [
		{ sort: 'stars', name: 'Рейтинг' },
		{ sort: 'priceAvg', name: 'Цена' },
	]
	const sortMemo = useMemo(() => {
		return sortItems.map(sort => <SelectEl key={sort.sort} sortItem={sort} />)
	}, [sortItems])
	return <div className={styles.sort}>{sortMemo}</div>
}

export default Select
