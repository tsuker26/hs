import React from 'react'
import { useSelector } from 'react-redux'
import AuthPage from '../pages/AuthPage'
import HotelSearchPage from '../pages/HotelSearchPage'

const RequireAuth = () => {
	const { auth } = useSelector(state => state.auth)

	return auth ? <HotelSearchPage /> : <AuthPage />
}

export default RequireAuth
