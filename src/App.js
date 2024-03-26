import './App.css';
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/currentWeather";
import {apiKey, key, weatherApiUrl} from "./components/api";
import {useState} from "react";
import search from "./components/search/Search";
import Forecast from "./components/forecast/forecast";
import axios from "axios";
import CityImage from "./components/location_image/cityImage";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecast, setForecast] = useState(null)
    const [image, setImage] = useState(null)
    const handleOnSearchChange = (searchData) => {

        const [lat, long] = searchData.value.split(" ")
        console.log(searchData)
        const citylist = searchData.label.split(" ")

        const city = citylist.slice(0, citylist.length-1).join('')
        console.log('cityyy', city)


        const currentWeatherFetch = fetch(`${weatherApiUrl}/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)

        const forecastFetch = fetch(`${weatherApiUrl}/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`)


        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({city: searchData.label, ...weatherResponse})
                setForecast({city: searchData.label, ...forecastResponse})
            })
            .catch((err) => console.error(err));

        const unsplashFetch = async () => {

            const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${city}&orientation=landscape&client_id=kNCMhPbfXpM0Tn4e8H4oAh4ZicnQhxX-4ny7Py6OGGU&per_page=10`)
            console.log('dataa', response.data)
            const data = response.data
            setImage(data)
            console.log(`https://api.unsplash.com/photos/?query=${city}&client_id=kNCMhPbfXpM0Tn4e8H4oAh4ZicnQhxX-4ny7Py6OGGU&per_page=10`)
        }


        unsplashFetch()
    }

    console.log('forecast = ', forecast)
    console.log('currentWeather = ', currentWeather)
    console.log('image', image)
    const boool = () => {
        if (image && image.total>0)return true
        else return null
    }
    console.log('bool', boool())
    return (
        <div className={'container'}>
            <Search onSearchChange={handleOnSearchChange}/>
            {!currentWeather && <div className={'landing'}>
                <h2 className={'weather-app'}>Weather app</h2>
                <p className={'weather-desc'}>Search your city to show the weather</p>
            </div>}

            <div className={'current-weather-city-photo'}>
                {currentWeather && <CurrentWeather data={currentWeather}/>}
                {boool() &&
                    <div className={'image-container'}>
                        <img src={`${image.results[0].urls.regular}`}/>
                    </div>
                }
            </div>

            {forecast && <Forecast data={forecast}/>}
        </div>
    );
}

export default App;
