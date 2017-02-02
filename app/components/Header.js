import React, { PropTypes } from 'react'
import FormContainer from '../containers/FormContainer'

function Header () {
  return (
    <div className='header'>
      <div className='header-text'>
        <h2>Simple Weather App</h2>
      </div>
      <FormContainer />
    </div>
  )
}

export default Header