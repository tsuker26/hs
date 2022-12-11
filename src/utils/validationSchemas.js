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
				.matches(/(?=.*[a-z0-9])/, 'Не должен содержать кириллицу')
				.min(8, 'Минимум 8 символов')
				.required('Обязательное поле'),
		})
	} else if (schema === 'search') {
		return yup.object().shape({
			location: yup.string().required('Обязательное поле'),
			date: yup.date('Должна быть дата').required('Обязательное поле'),
			countDay: yup.number('Должно быть число').required('Обязательное поле'),
		})
	}
}
