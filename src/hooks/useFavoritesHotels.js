import { useMemo } from 'react'
import { quickSort } from '../utils/quickSort'
import HotelEl from '../components/HotelSearch/HotelEl'

export const useFavoritesHotels = (
	favoritesHotels,
	filterName,
	arrowName,
	dateFormat
) => {
	const favoritesHotelsSort = useMemo(() => {
		if (arrowName === 'ASC') {
			return quickSort(favoritesHotels, filterName)
		} else {
			return quickSort(favoritesHotels, filterName).reverse()
		}
	}, [favoritesHotels, filterName, arrowName])
	return useMemo(() => {
		return favoritesHotelsSort.map(hotel => (
			<HotelEl
				key={hotel.hotelId}
				hotel={hotel}
				allHotels={false}
				dateFormat={dateFormat}
			/>
		))
	}, [favoritesHotelsSort, dateFormat])
}
