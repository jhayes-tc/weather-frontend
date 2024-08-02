'use client';
import { useState } from 'react';
import { getWeather } from "@/services/weather";
import { WeatherResponse } from "@/types";
import { AxiosResponse } from "axios";

export default function Weather() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [temp, setTemp] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setTemp('')
    getWeather(lat, lon).then((res: AxiosResponse<WeatherResponse>) => setTemp(res.data.main.temp.toString()))
  }
  return <>
    <form className="flex flex-col gap-4 items-center" onSubmit={submit}>
      <label className="form-control w-full max-w-xs flex flex-col gap-2">
        <div className="label-text">Enter the latitude and longitude to get the weather</div>
        <input type="text" placeholder="Latitude" className="input input-bordered input-primary w-full max-w-xs" value={lat} onChange={(e) => setLat(e.target.value)} />
        <input type="text" placeholder="Longitude" className="input input-bordered input-primary w-full max-w-xs" value={lon} onChange={(e) => setLon(e.target.value)} />
      </label>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    {/* TODO: Display data received from API */}
    {temp !== '' && <p>{temp}&deg;</p>}
  </>
}
