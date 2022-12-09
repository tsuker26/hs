import React from 'react'
import './MyButton.module.scss'

const MyButton = ({ type, children }) => <button type={type}>{children}</button>

export default MyButton
