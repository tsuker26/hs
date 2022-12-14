export const dateOutCalc = (date, countDay) => {
	const setDay = new Date(date).setDate(new Date(date).getDate() + +countDay)
	return new Date(setDay).toISOString().split('T')[0]
}
export const dateFormatCreate = date => {
	return new Date(date)
		.toLocaleDateString('ru-RU', {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		})
		.replace('г.', '')
}
