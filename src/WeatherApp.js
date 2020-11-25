import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function WeatherApp(props) {
  function Submit(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}˚C`
    );
  }

  let apiKey = "9430278bf6c3175ec4b37df9d1ac0836";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(Submit);

  return (
    <div className="WeatherApp">
      <Loader
        type="Circles"
        color="#00BFFF"
        height={85}
        width={85}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default WeatherApp;
