import React from 'react'
import './Button.module.scss'

const Button = ({ type, children }) => <button type={type}>{children}</button>

export default Button
