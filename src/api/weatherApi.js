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

export const getCurrentWeather = async(woeid) => {
    try{
        const date = getCurrentDate();
        console.log(date)
        const result = await axios.get(`https://cors-anywhere.herokuapp.com/metaweather.com/api/location/${woeid}`);
        return result.data;
    }catch(error){
        console.log(error)
    }
}