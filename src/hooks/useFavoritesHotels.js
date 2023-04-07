import { useMemo } from 'react'
import { quickSort } from '../utils/quickSort'

export const useFavoritesHotels = (favoritesHotels, sortName, sortBy) => {
	return useMemo(() => {
		if (sortBy === 'ASC') {
			return quickSort(favoritesHotels, sortName)
		} else {
			return quickSort(favoritesHotels, sortName).reverse()
		}
	}, [favoritesHotels, sortName, sortBy])
}
