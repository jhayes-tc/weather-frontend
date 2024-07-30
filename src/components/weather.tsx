'use client';

import { useState } from 'react';
import type { AxiosResponse } from 'axios';
import { getWeather } from "@/services/weather";
import { WeatherResponse } from '@/types';

export default function Weather() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentTemp, setCurrentTemp] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getWeather(lat, lon).then(({ data }: AxiosResponse<WeatherResponse>) => {
      setSubmitted(true);
      setCurrentTemp(data.main.temp.toString());
    })
  }
  return <>
    <form className="flex flex-col gap-4 items-center" onSubmit={submitForm}>
      <label className="form-control w-full max-w-sm flex flex-col gap-2">
        <div className="label-text">Enter the latitude and longitude to get the weather</div>
        <input type="text" placeholder="Latitude" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setLat(e.target.value)} />
        <input type="text" placeholder="Longitude" className="input input-bordered input-primary w-full max-w-xs" onChange={(e) => setLon(e.target.value)} />
      </label>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    {submitted && (
      <div className='card card-outline'>
        <h4 className='card-title'>Current Temperature</h4>
        <p className='card-body'>{currentTemp}&deg;</p>
      </div>
    )}
  </>
}
