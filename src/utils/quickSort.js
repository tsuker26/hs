export const quickSort = (array, filterName) => {
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
        if (el[filterName] < middleEl[filterName]) {
            less.push(el)
        } else {
            greater.push(el)
        }
    })
    return [...quickSort(less, filterName), middleEl, ...quickSort(greater, filterName)]
};