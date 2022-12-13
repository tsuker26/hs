export const dateOutCount = (date, countDay) => {
	const setDay = new Date(date).setDate(new Date(date).getDate() + +countDay)
	return new Date(setDay).toISOString().split('T')[0]
}
