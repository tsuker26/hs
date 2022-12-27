import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'

import styles from './AuthForm.module.scss'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import { loginAc } from '../../redux/reducers/authReducer'
import { validationsSchema } from '../../utils/validationSchemas'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const validate = validationsSchema('auth')
	return (
		<div className={styles.form_auth}>
			<h1>Simple Hotel Check</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validate}
				onSubmit={() => {
					window.localStorage.setItem('auth', 'true')
					dispatch(loginAc())
					navigate('/')
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
							<MyInput
								name='email'
								type='email'
								label='Логин'
								placeholder={'Enter your email address...'}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								touched={touched.email}
								errorMessage={errors.email}
							/>
						</div>
						<div className={`${styles.input_block} ${styles.password_block} `}>
							<MyInput
								name='password'
								type='password'
								label='Пароль'
								placeholder={'Enter your password... '}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								touched={touched.password}
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
