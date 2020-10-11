import React, {useState, useEffect} from 'react';
import { AsideIndex } from'./components/aside/AsideIndex';
import { Dashboard } from './components/dashboard/Dashboard';
import { getTodayWeather, getCurrentLocation } from './api/weatherApi';
import 'material-design-icons/iconfont/material-icons.css'
import './App.css';

function App() {

  //woeid = Where on Earth ID
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
      setIsLoading(false);
      const result = () =>{ navigator.geolocation.getCurrentPosition( async (position) => {
          const {latitude, longitude} = position.coords;
          const data = await getCurrentLocation(latitude, longitude);
          const todayWeather = await getTodayWeather(data.woeid);
          console.log(todayWeather)
          setData(todayWeather);
          setIsLoading(true);

          });
      }
      result();
  }, []);


  return (
    <div className="container">
      { (!isLoading) ? 'Loading...'
      
      : 
      <>
        <AsideIndex weather = {data}/>
        <Dashboard />
      </>
     }
    </div>
  );
}

export default App;
