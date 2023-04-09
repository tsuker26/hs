import React from 'react'
import styles from './Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setModalAc } from '../../../redux/reducers/modalReducer'

const Modal = ({ children }) => {
	const { active } = useSelector(state => state.modal)
	const dispatch = useDispatch()
	return (
		<div className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
			<div
				className={
					active
						? `${styles.modal__content} ${styles.active}`
						: styles.modal__content
				}
				onClick={event => event.stopPropagation()}
			>
				<div
					className={styles.close}
					onClick={() => dispatch(setModalAc({ active: false, body: null }))}
				>
					<svg
						height='512px'
						id='Layer_1'
						version='1.1'
						viewBox='0 0 512 512'
						width='512px'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5
                        c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9
                          c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z'
						/>
					</svg>
				</div>
				{children}
			</div>
		</div>
	)
}

export default Modal
