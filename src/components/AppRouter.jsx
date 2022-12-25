import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HotelSearchPage from '../pages/HotelSearchPage'
import AuthPage from '../pages/AuthPage'
import RequireAuth from '../hoc/RequireAuth'

const AppRouter = () => {
	return (
		<div className='App'>
			<Routes>
				<Route
					path={'/hotels'}
					element={
						<RequireAuth>
							<HotelSearchPage />
						</RequireAuth>
					}
				/>
				<Route path={'/'} element={<AuthPage />} />
			</Routes>
		</div>
	)
}

export default AppRouter
