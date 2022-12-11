import {useMemo} from 'react'
import styles from './FavoritesBlock.module.scss'
import s from '../HotelSearch.module.scss'
import Filter from './Filter'
import {useSelector} from 'react-redux'
import HotelEl from '../HotelEl'
import {quickSort} from '../../../utils/quickSort'

const FavoritesBlock = ({dateFormat}) => {
    const {favoritesHotels} = useSelector(state => state?.hotels)
    const {filterName, arrowName} = useSelector(state => state?.filter)

    const favoritesHotelsSort = useMemo(() => {
        if (arrowName === 'ASC') {
            return quickSort(favoritesHotels, filterName)
        } else {
            return quickSort(favoritesHotels, filterName).reverse()
        }
    }, [favoritesHotels, filterName, arrowName])
    const hotelsMemo = useMemo(() => {
        return favoritesHotelsSort.map(hotel => (
            <HotelEl
                key={hotel.hotelId}
                hotel={hotel}
                allHotels={false}
                dateFormat={dateFormat}
            />
        ))
    }, [favoritesHotelsSort])
    return (
        <div className={`${styles.favorites_block} ${s.block}`}>
            <h1 style={{textAlign: 'start'}}>Избранное</h1>
            {favoritesHotelsSort?.length ? (
                <>
                    <Filter/>
                    <div className={styles.favorites}>
                        {hotelsMemo}
                    </div>
                </>
            ) : (
                <h1 style={{marginTop: '20px'}}>У вас нет избранных отелей</h1>
            )}
        </div>
    )
}

export default FavoritesBlock
