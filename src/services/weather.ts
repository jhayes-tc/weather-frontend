import { WeatherResponse } from "@/types";

/**
 * Get the current weather for the provided latitude and longitude
 * @param lat: Latitude
 * @param  lon: Longitude  
 * @returns current weather for location
 */
export async function getWeather(lat: string, lon: string): Promise<AxiosResponse<WeatherResponse>> {
  // URL To get data: https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}
  // TODO: Finish the function
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  console.log('URL', url);
  return api.get(url);
}
