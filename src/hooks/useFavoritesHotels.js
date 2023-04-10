import { useMemo } from 'react'
import { quickSort } from '../utils/quickSort'

const useFavoritesHotelsFilterDate = (favoritesHotels, dateFormat) => {
	return useMemo(() => {
		return favoritesHotels.filter(hotel => hotel.date === dateFormat)
	}, [favoritesHotels, dateFormat])
}
export const useFavoritesHotels = (
	favoritesHotels,
	sortName,
	sortBy,
	dateFormat
) => {
	const favoriteHotelsFilterDate = useFavoritesHotelsFilterDate(
		favoritesHotels,
		dateFormat
	)
	return useMemo(() => {
		if (sortBy === 'ASC') {
			return quickSort(favoriteHotelsFilterDate, sortName)
		} else {
			return quickSort(favoriteHotelsFilterDate, sortName).reverse()
		}
	}, [favoriteHotelsFilterDate, sortName, sortBy])
}
