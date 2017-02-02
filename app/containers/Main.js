import React from 'react'
import Header from '../components/Header'

const Main = React.createClass({
  render () {
    return (
      <div className='main-container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

export default Main