import React from 'react'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
	// const dispatch = useDispatch()
	// useEffect(() => {
	// 	if (window.localStorage.getItem('auth')) dispatch(loginAc())
	// }, [])
	// const { auth } = useSelector(state => state.auth)
	const auth = window.localStorage.getItem('auth')

	if (!auth) {
		return <Navigate to='/' />
	}

	return children
}

export default RequireAuth
