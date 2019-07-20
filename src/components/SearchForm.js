import React from 'react'
import BreweryAdapter from '../adapters/BreweryAdapter'
import { Form, Button } from 'semantic-ui-react'

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
    BreweryAdapter.getBreweriesByCity(this.state.city)
    this.setState({ city: "" })
    e.target.reset()
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

export default SearchForm;
