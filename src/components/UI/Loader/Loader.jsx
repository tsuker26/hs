import React from 'react'
import styles from './Loader.module.scss'

const Loader = ({ size, marginTop }) => {
	return (
		<div
			className={styles.loader_block}
			style={{ marginTop: `${marginTop}px` }}
		>
			{size >= 150 && (
				<div className={styles.text}>
					<span>Загрузка...</span>
				</div>
			)}
			<div
				style={{ width: `${size}px`, height: `${size}px` }}
				className={styles.loader}
			></div>
		</div>
	)
}

export default Loader
