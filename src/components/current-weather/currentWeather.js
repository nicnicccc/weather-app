import './currentWeather.css'

const CurrentWeather = ({data}) => {
    console.log('icoonn', data.weather[0].icon)
    return (
        <div className={'weather'}>
            <div className={'up'}>
                <div>
                    <p className={'cityName'}>{data.city}</p>
                    <p className={'weather-description'}>{data.weather[0].description}</p>
                </div>
                <img alt={'weather'} className={'weather-icon'} src={`weather-icons/${data.weather[0].icon}.png`}/>
            </div>

            <div className={'bottom'}>
                <p className={'temperature'}>{Math.round(data.main.temp)}°C</p>
                <div className={'details'}>
                    <div className={'parameterRow'}>
                        <span className={'parameter-label'}>
                            Details:
                        </span>
                    </div>
                    <div className={'parameterRow'}>
                        <span className={'parameter-label'}>
                            Feels like
                        </span>
                        <span className={'parameter-value'}>
                            {Math.round(data.main.feels_like)}°C
                        </span>
                    </div>
                    <div className={'parameterRow'}>
                        <span className={'parameter-label'}>
                            Wind
                        </span>
                        <span className={'parameter-value'}>
                            {data.wind.speed} m/s
                        </span>
                    </div>
                    <div className={'parameterRow'}>
                        <span className={'parameter-label'}>
                            Humidity
                        </span>
                        <span className={'parameter-value'}>
                            {data.main.humidity}%
                        </span>
                    </div>
                    <div className={'parameterRow'}>
                        <span className={'parameter-label'}>
                            Pressure
                        </span>
                        <span className={'parameter-value'}>
                            {data.main.pressure} hPa
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentWeather