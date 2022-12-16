import React from 'react'
import styles from './MyInput.module.scss'

const MyInput = ({
	name,
	type,
	label,
	placeholder,
	onBlur,
	onChange,
	value,
	touched,
	errorMessage,
}) => {
	return (
		<>
			<label
				className={styles.label}
				style={errorMessage && touched && { color: 'red' }}
				htmlFor={name}
			>
				{label}
			</label>
			<input
				className={
					touched && errorMessage
						? `${styles.myInput} ${styles.errorInput}`
						: styles.myInput
				}
				name={name}
				type={type}
				placeholder={placeholder}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
			/>
			<div className={styles.error}>{touched && errorMessage}</div>
		</>
	)
}

export default MyInput
