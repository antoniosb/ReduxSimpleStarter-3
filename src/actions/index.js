import axios from 'axios'

// const API_KEY = 'b1b15e88fa797225412429c1c50c122a1'
const API_KEY = '087460c5252484031a4f46fa76d4a577'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city, country = 'br') {
  const url = `${ROOT_URL}&q=${city},${country}`
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
