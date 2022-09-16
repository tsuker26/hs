import axios from "axios";

export const getHotels = async (city) => {
    const {data} = await axios.get(`https://engine.hotellook.com/api/v2/lookup.json?query=${city}&lang=ru&lookFor=hotel&limit=10`)
    return data
}