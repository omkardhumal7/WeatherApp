import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const apiKey = '043ef86eec8c4d3e238e723fdf859bf2'
    
export const getWeatherData = async (cityname) => {
    try {
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    } catch(error) {
        throw error;
    }
} 
