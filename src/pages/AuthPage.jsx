import React, { useEffect } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthPage = () => {
	const { isAuth } = useSelector(state => state.auth)
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuth) navigate('/')
	}, [])
	return (
		<div className={'auth_page'}>
			<div className='content'>
				<AuthForm />
			</div>
		</div>
	)
}

export default AuthPage
