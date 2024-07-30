import { WeatherApiResponse } from "@/types";

const apiKey = process.env.OPEN_WEATHER_API_KEY;

/**
 * Get the current weather for the provided latitude and longitude
 * @param lat: Latitude
 * @param lon: Longitude
 * @returns current weather for location
 */
export async function getWeather(): Promise<WeatherApiResponse> {
  // URL To get data: https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}
  // TODO: Finish the function
}
