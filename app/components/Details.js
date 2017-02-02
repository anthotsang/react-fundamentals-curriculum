import React, { PropTypes } from 'react'
import { getDate } from '../utils/helpers'

function Details (props) {
  const { city } = props.routeParams;
  const { weather } = props.location.state;
  console.log(weather)
  return (
    <div className='weather-detailed'>
      <div className='main'>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} className="img-rounded img-responsive"/>
        <h2>{getDate(weather.dt)}</h2>
      </div>
      <div className='details'>
        <p>{city}</p>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {weather.temp.min} degrees</p>
        <p>max temp: {weather.temp.max} degrees</p>
        <p>humidity: {weather.humidity}</p>
      </div>
    </div>
  )
}

export default Details