import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'

import styles from './AuthForm.module.scss'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import { loginAc } from '../../redux/reducers/authReducer'

const AuthForm = () => {
	const dispatch = useDispatch()
	return (
		<div className={styles.form_auth}>
			<h1>Simple Hotel Check</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					const errors = {}
					if (!values.email) {
						errors.email = 'Обязательное поле'
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Некорректный адресс почты '
					}

					if (!values.password) {
						errors.password = 'Обязательное поле'
					} else if (!/(?=.*[a-z0-9])/g.test(values.password)) {
						errors.password = 'Не должен содержать кириллицу'
					} else if (!/[0-9a-zA-Z!@#$%^&*]{8,}/g.test(values.password)) {
						errors.password = ' Минимум 8 символов'
					}
					return errors
				}}
				onSubmit={() => {
					window.localStorage.setItem('auth', 'true')
					dispatch(loginAc())
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<div className={`${styles.input_block} ${styles.email_block} `}>
							<label
								style={errors.email && touched.email && { color: 'red' }}
								htmlFor='email'
							>
								Логин
							</label>
							<MyInput
								name='email'
								type='email'
								placeholder={'Enter your email address...'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								error={errors.email && touched.email}
								errorMessage={errors.email}
							/>
						</div>
						<div className={`${styles.input_block} ${styles.password_block} `}>
							<label
								style={errors.password && touched.password && { color: 'red' }}
								htmlFor='password'
							>
								Пароль
							</label>
							<MyInput
								name='password'
								type='password'
								placeholder={'Enter your password... '}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								error={errors.password && touched.password}
								errorMessage={errors.password}
							/>
						</div>

						<div className={styles.btn_submit}>
							<MyButton type='submit'>Войти</MyButton>
						</div>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default AuthForm
