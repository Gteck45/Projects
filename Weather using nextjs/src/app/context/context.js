// 'use client';
import { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('faridabad');
  const [weather, setWeather] = useState({});
  const [hours, setHours] = useState('');

  useEffect(() => {
    const now = new Date();
    setHours(now.getHours());
  }, []);

  useEffect(() => {
    const API_KEY = 'Please insert your API key here'; //get your API key from https://www.weatherapi.com/
    if (!API_KEY) return;

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error('Weather API error:', err));
  }, [city]);

  const handleChange = (e) => setSearch(e.target.value);
  const searchByText = () => {
    setCity(search);
    setSearch('');
  };

  return (
    <WeatherContext.Provider value={{
      search, setSearch, city, setCity,
      weather, setWeather, hours, setHours,
      handleChange, searchByText
    }}>
      {children}
    </WeatherContext.Provider>
  );
};
