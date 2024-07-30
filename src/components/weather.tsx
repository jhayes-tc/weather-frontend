'use client';
import { getWeather } from "@/services/weather";

export default function Weather() {
return <>
  <form className="flex flex-col gap-4 items-center">
    <label className="form-control w-full max-w-xs flex flex-col gap-2">
      <div className="label-text">Enter the latitude and longitude to get the weather</div>
      <input type="text" placeholder="Latitude" className="input input-bordered input-primary w-full max-w-xs" />
      <input type="text" placeholder="Longitude" className="input input-bordered input-primary w-full max-w-xs" />
    </label>
    <button className="btn btn-primary">Submit</button>
  </form>
  {/* TODO: Display data received from API */}
</>
}
