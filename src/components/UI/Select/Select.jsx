import styles from './MySelect.module.scss'
import SelectEl from './SelectEl'

const Select = ({ sortItems }) => {
	return (
		<div className={styles.sort}>
			{sortItems.map(sort => (
				<SelectEl key={sort.sort} sortItem={sort} />
			))}
		</div>
	)
}

export default Select
