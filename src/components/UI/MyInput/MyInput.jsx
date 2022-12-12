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
	error,
	errorMessage,
}) => {
	return (
		<>
			<label style={error && { color: 'red' }} htmlFor={name}>
				{label}
			</label>
			<input
				className={
					error ? `${styles.myInput} ${styles.errorInput}` : styles.myInput
				}
				name={name}
				type={type}
				placeholder={placeholder}
				onBlur={onBlur}
				onChange={onChange}
				value={value}
			/>
			<div className={styles.error}>{error && errorMessage}</div>
		</>
	)
}

export default MyInput
