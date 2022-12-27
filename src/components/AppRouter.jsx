import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../hoc/RequireAuth'
import AuthPage from '../pages/AuthPage'
import HotelSearchPage from '../pages/HotelSearchPage'

const AppRouter = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path=''
					element={
						<RequireAuth>
							<HotelSearchPage />
						</RequireAuth>
					}
				/>
				<Route path={'/login'} element={<AuthPage />} />
			</Routes>
		</div>
	)
}

export default AppRouter
