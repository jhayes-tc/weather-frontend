import axios from 'axios';
import { WeatherResponse } from "@/types";

const api = axios.create();

/**
 * Get the current weather for the provided latitude and longitude
 * @param lat: Latitude
 * @param lon: Longitude
 * @returns current weather for location
 */
export async function getWeather(lat: string, lon: string): Promise<AxiosResponse<WeatherResponse>> {
  // URL To get data: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}
  // TODO: Finish the function
  // const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const apiKey = 'c537d1e59ce7d423e17a58ec96e964fa';
  console.log("env", process)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  console.log('URL', url);
  return api.get(url);
}
