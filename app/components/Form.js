import React, { PropTypes } from 'react'

function Form ({onSubmitCity, onUpdateCity, city}) {
  return (
    <div className='city-form'>
      <input
        className='form-control'
        onChange={onUpdateCity}
        placeholder='City, State'
        value={city}/>
      <button
        className="btn btn-success"
        onClick={onSubmitCity}
        type="submit">
        Get Weather
      </button>
    </div>
  )
}

Form.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default Form