import React from 'react'
import styles from './Header.module.scss'
import logOutIcon from '../../assests/logout_icon.png'
import { useDispatch } from 'react-redux'
import { logOutAc } from '../../redux/reducers/authReducer'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const logOut = () => {
		dispatch(logOutAc())
		window.localStorage.removeItem('auth')
		navigate('/')
	}
	return (
		<div className={styles.header}>
			<div>
				<h1>Simple Hotel Check</h1>
			</div>
			<div className={styles.logOut} onClick={logOut}>
				<span>Выйти</span>
				<img src={logOutIcon} alt='' />
			</div>
		</div>
	)
}

export default Header
