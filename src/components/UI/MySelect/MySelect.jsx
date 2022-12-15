import { useMemo } from 'react'
import styles from '../../HotelSearch/FavotitesBlock/FavoritesBlock.module.scss'
import SelectEl from './SelectEl'

const MySelect = ({ sortItems }) => {
	const sortMemo = useMemo(() => {
		return sortItems.map(sort => <SelectEl key={sort.sort} sortItem={sort} />)
	}, [sortItems])
	return <div className={styles.sort}>{sortMemo}</div>
}

export default MySelect
