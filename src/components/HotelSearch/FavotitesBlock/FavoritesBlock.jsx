import styles from './FavoritesBlock.module.scss'
import s from '../HotelSearch.module.scss'
import { useSelector } from 'react-redux'
import FavoriteItems from './FavoriteItems'

const FavoritesBlock = () => {
	const { active } = useSelector(state => state?.modal)
	return (
		<div
			className={`${s.block} ${
				active ? `${styles.modal_favorites_block}` : `${styles.favorites_block}`
			}  `}
		>
			<h1 className={s.favorite_head}>Избранное</h1>
			<FavoriteItems />
		</div>
	)
}

export default FavoritesBlock
