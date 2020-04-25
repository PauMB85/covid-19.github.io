import API from './../config/Axios';
import axios from 'axios';


export const fetchGlobalData = async () => {
    try {
        return await API.get();
    } catch(error) {
        return error;
    }
}

export const fetchCountriesData = async () => {
    try {
        return await API.get('/countries');
    } catch(error) {
        return error;
    }
}

export const globalEvolution = async () => {
    try {
        return await API.get('/daily');
    } catch (error) {
        return error;
    }
}

export const fetchDataByCountry = async (country) => {
    try {
        const { data } = await axios.get('https://pomber.github.io/covid19/timeseries.json');
        return data[country];
    } catch (error) {
        return error;
    }
}

