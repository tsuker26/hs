export const quickSort = (array, sortName) => {
	if (array.length <= 1) {
		return array
	}
	let middleIndex = Math.floor(array.length / 2)
	let middleEl = array[middleIndex]
	let less = []
	let greater = []
	array.forEach((el, i) => {
		if (i === middleIndex) {
			return
		}
		if (el[sortName] < middleEl[sortName]) {
			less.push(el)
		} else {
			greater.push(el)
		}
	})
	return [
		...quickSort(less, sortName),
		middleEl,
		...quickSort(greater, sortName),
	]
}
