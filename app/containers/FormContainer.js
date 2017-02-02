import React from 'react'
import Form from '../components/Form'

const FormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      city: ''
    }
  },
  handleSubmitCity (event) {
    event.preventDefault();
    const { city } = this.state;
    this.setState({
      city: ''
    });

    this.context.router.push(`/forecast/${city}`)
  },
  handleUpdateCity (event) {
    this.setState({
      city: event.target.value
    });
  },
  render () {
    return (
      <Form
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
})

export default FormContainer