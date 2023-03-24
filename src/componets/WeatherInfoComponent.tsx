import React, { FC } from "react";
import '../App.css';

interface InfoProps {
    name: string
    value: string
}

interface ForecastProps {
    name: string
    value: string
    day: number
}

interface Props {
    weather: any
    forecast: any
}

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const WeatherInfoComponent: FC<InfoProps> = ({ name, value }: InfoProps) => {
    return (
        <div className="infoContainer">
            <img className="infoIcon" src={`/icons/${name}.svg`} alt={name}/>
            <span className="infoLabel">
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
};

const ForecastComponent: FC<ForecastProps> = ({ name, value, day }: ForecastProps) => {
    return (
        <div className="forecastContainer">
            <span className="infoLabel">
                {weekday[day].substring(0,3)}
            </span>
            <img className="infoIcon" src={`/icons/${name}.svg`} alt={name}/>
            <span className="infoLabel">
                {value}
            </span>
        </div>
    );
};

const WeatherComponent: FC<Props> = ({ weather, forecast }: Props) => {
    return (
        <>
            <div className="weatherContainer">
                <span className="condition">
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
                <img className="weatherIcon" src={`/icons/${weather?.weather[0].icon}.svg`} alt={weather?.weather[0].icon}/>
            </div>
            <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <span className="weatherInfoLabel">Weather Info</span>
            <div className="weatherInfoContainer">
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </div>

            <span className="weatherInfoLabel">Extended Forecast</span>
            <div className="weatherInfoContainer">
                {forecast?.list?.filter((data: any) => {
                    return new Date(data.dt_txt).getHours() === 12
                }).map((data: any) => {
                    return <ForecastComponent name={data.weather[0].icon} value={data.weather[0].main} day={new Date(data.dt_txt).getDay()}/>
                })}
            </div>
        </>
    );
};

export default WeatherComponent;
