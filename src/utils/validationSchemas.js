import * as yup from 'yup'

export const validationsSchema = schema => {
	if (schema === 'auth') {
		return yup.object().shape({
			email: yup
				.string()
				.email('Некорректный адресс почты ')
				.required('Обязательное поле'),
			password: yup
				.string()
				.matches(
					/(?:\s|^)[A-Za-z0-9\-\.\_]+(?:\s|$)/,
					'Не должен содержать кириллицу'
				)
				.min(8, 'Минимум 8 символов')
				.required('Обязательное поле'),
		})
	} else if (schema === 'search') {
		const today = new Date()
		today.setHours(0, 0, 0, 0)
		return yup.object().shape({
			location: yup.string().required('Обязательное поле'),
			date: yup
				.date()
				.min(today, 'Прошедшее время')
				.required('Обязательное поле'),
			countDay: yup
				.number()
				.typeError('Должно быть число')
				.min(1, 'Не может быть меньше 1 ')
				.required('Обязательное поле'),
		})
	}
}
