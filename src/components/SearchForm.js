import React from 'react'
import BreweryAdapter from '../adapters/BreweryAdapter'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { toggleReset } from '../action'

class SearchForm extends React.Component {
  state = {
    city: "",
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Should not return anything if user did not input, OpenBreweryDB retrieves breweries with empty city paramaters
    if (this.state.city) {
      BreweryAdapter.getBreweriesByCity(this.state.city)
    }
    this.setState({ city: "" })
    e.target.reset()
    this.props.toggleReset()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>City</label>
          <input placeholder='City' value={this.state.city} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { toggleReset })(SearchForm);
