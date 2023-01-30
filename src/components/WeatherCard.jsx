import React, { useState } from "react";

const WeatherCard = ({ weatherInfo, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleClik = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <article className="card">
      <h1 className="card_title">Weather App</h1>
      <h2 className="card_subtitle">
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>
      <div className="card_body">
        <div className="card_img_conteiner">
          <img
            className="card_img"
            src={`http://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <div className="card_info">
          <section>
            <h3 className="card_info_title">
              "{weatherInfo?.weather[0].description}"
            </h3>
            <ul className="card_ifo_body">
              <li className="card_info_item">
                <span className="card_info_label">Wind Speed:</span> {weatherInfo?.wind.speed} m/s
              </li>
              <li className="card_info_item">
                <span className="card_info_label">Clouds:</span> {weatherInfo?.clouds.all}%
              </li>
              <li className="card_info_item">
                <span className="card_info_label">Presure:</span> {weatherInfo?.main.pressure} hPa
              </li>
            </ul>
          </section>
        </div>
      </div>
      <footer className="card_footer">
        <h2 className="card_temperature">
          {isCelsius
            ? temperature?.celsius + " °C"
            : temperature?.farenheit + " °F"}
        </h2>
        <button className="card_btn" onClick={handleClik}>Change to °{isCelsius ? "F" : "C"}</button>
      </footer>
    </article>
  );
};

export default WeatherCard;
