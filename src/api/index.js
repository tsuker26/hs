import axios from "axios";

// export const getHotels = async (city) => {
//     const {data} = await axios.get(`https://engine.hotellook.com/api/v2/lookup.json?query=${city}&lang=ru&lookFor=hotel&limit=10`)
//     return data
// }

export const getHotels = async (city,checkIn,checkOut) => {
    const {data} = await axios.get(`https://engine.hotellook.com/api/v2/cache.json?location=${city}&lang=ru&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
    console.log(data)
    return data
}


// https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2022-12-10&checkOut=2022-12-12&limit=10