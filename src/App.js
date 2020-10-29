import React, {useState, useEffect} from 'react';
import { AsideIndex } from'./components/aside/AsideIndex';
import { Dashboard } from './components/dashboard/Dashboard';
import { getTodayWeather, getCurrentLocation, getCurrentWeekWeather } from './api/weatherApi';
import 'material-design-icons/iconfont/material-icons.css'
import './App.css';

function App() {

  //woeid = Where on Earth ID
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [currentLocation, setCurrentLocation] = useState('');
  const [weekWeather, setWeekWeather] = useState([]);

  useEffect(() => {
      setIsLoading(false);
      const result = () =>{ navigator.geolocation.getCurrentPosition( async (position) => {
          const {latitude, longitude} = position.coords;
          const data = await getCurrentLocation(latitude, longitude);
          const todayWeather = await getTodayWeather(data.woeid);
          const weekData = await getCurrentWeekWeather(data.woeid);
          setCurrentLocation(data.title);
          setData(todayWeather);
          setWeekWeather(weekData.consolidated_weather);
          setIsLoading(true);

          });
      }
      result();
  }, []);

  
  return (
    <div className="main__content">
      { (!isLoading) ? 'Loading...'
      
      : 
      <>
        <AsideIndex weather = { data } location = {currentLocation}/>
        <Dashboard weekWeather = {weekWeather} highlight = {data}/>
      </>
     }
    </div>
  );
}

export default App;
