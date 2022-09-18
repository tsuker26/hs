import axios from "axios";



export const getHotels = async (city,checkIn,checkOut) => {
    const {data} = await
        axios
            .get(`https://engine.hotellook.com/api/v2/cache.json?location=${city}&lang=ru&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    return data
}
