import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { getDate } from '../utils/helpers'

function DisplayWeather(props) {
  const { weather, city } = props.value
  return (
    <Link to={{pathname: `/details/${city}`, state: {weather}}}>
      <div className="weather-summary">
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} className="img-rounded img-responsive"/>
        <h2>{getDate(weather.dt)}</h2>
      </div>
    </Link>
  )
}

function Forecast ({loading, city, weather}) {
  return loading === true
  ? <div>loading</div>
  : <div className='forecast'>
      <h1>{city}</h1>
      <p>select a day</p>
      <div className="days">
        {weather.map((weather, index) => <DisplayWeather value={{weather, city}} key={index} />)}
      </div>
    </div>
}

Forecast.propTypes = {
  loading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired
}

export default Forecast