import { WeatherResponse } from "@/types";

const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY; 

/**
 * Get the current weather for the provided latitude and longitude
 * @param lat: Latitude
 * @param  l on: Longitude  
 * @returns current weather for location
 */
export async function getWeather(): Promise<WeatherApiResponse> {
// URL To get data: https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}
  // TODO: Finish the function
}
