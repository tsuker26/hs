import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../hoc/RequireAuth'

const AppRouter = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path={'/'} element={<RequireAuth />} />
			</Routes>
		</div>
	)
}

export default AppRouter
