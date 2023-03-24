import React, { FC } from "react";
import '../App.css';

interface Props {
  updateCity: (city: any) => void;
  fetchWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CityComponent: FC<Props> = ({ updateCity, fetchWeather }: Props) => {
  return (
    <>
      <img className="welcomeWeatherLogo" src={`/icons/04d.svg`} alt="perfect-day" />
      <span className="ChooseCityLabel">Find weather of your city</span>
      <form className="searchBox" onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
    </>
  );
};

export default CityComponent;