import React from 'react'
import axios from 'axios'
import Forecast from '../components/Forecast'
import { WEATHER_API_KEY } from '../private/api_keys'

function getFiveDayWeather (cityname='') {
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&type=accurate&units=metric&APPID=${WEATHER_API_KEY}&cnt=5`)
}

const ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      loading: true,
      weather: []
    }
  },
  async componentDidMount () {
    const { city } = this.props.routeParams;
    try {
      const weather = await getFiveDayWeather(city);
      this.setState({
        loading: false,
        weather: weather.data.list
      });
    } catch (error) {
      console.warn('Error in ForecastContainer: ', error);
    }
  },
  render () {
    return (
      <Forecast
        loading={this.state.loading}
        city={this.props.routeParams.city}
        weather={this.state.weather} />
    )
  }
})

export default ForecastContainer