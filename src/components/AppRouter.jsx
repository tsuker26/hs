import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAc } from '../redux/reducers/authReducer'
import { Route, Routes } from 'react-router-dom'
import HotelSearchPage from '../pages/HotelSearchPage'
import AuthPage from '../pages/AuthPage'

const AppRouter = () => {
	const dispatch = useDispatch()
	const { auth } = useSelector(state => state.auth)
	useEffect(() => {
		if (window.localStorage.getItem('auth')) dispatch(loginAc())
	}, [])
	return (
		<div className='App'>
			{auth ? (
				<Routes>
					<Route path={''} element={<HotelSearchPage />} />
				</Routes>
			) : (
				<Routes>
					<Route path={''} element={<AuthPage />} />
				</Routes>
			)}
		</div>
	)
}

export default AppRouter
