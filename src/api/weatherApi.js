import axios from 'axios';
import { getCurrentDate } from '../helpers/date';


export const getCurrentLocation = async (lat, long) => {
    
    try{
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/search/?lattlong=${lat},${long}`);
        //Get only the near city
        return result.data[0];
    }catch(error){
        console.log(error);
    }

}


export const getTodayWeather = async(woeid) => {
    try{
        const date = getCurrentDate();
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${woeid}/${date}`);
        return result.data[0];
    }catch(error){
        console.log(error)
    }
}

//With this api call we get the weather for the current day and next 5 days
export const getCurrentWeekWeather = async(woeid) => {
    try{
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${woeid}`);
        console.log(result)
    }catch(error){
        console.log(error)
    }
}