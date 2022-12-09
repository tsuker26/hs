import React from 'react'
import './MyButton.module.scss'

const MyButton = ({ children, ...props }) => (
	<button {...props}>{children}</button>
)

export default MyButton
