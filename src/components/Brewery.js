import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleView, selectedBrewery } from '../action';

class Brewery extends React.Component {

  handleClick = () => {
    this.props.selectedBrewery(this.props.brewery);
    this.props.toggleView();
  }

  render () {
    const { brewery } = this.props
    return (
      <Card className="brewery-card">
        <Card.Content>
            <Card.Header>{brewery.name}</Card.Header>
            <Card.Description>{brewery.brewery_type}</Card.Description>
            <Card.Description>{brewery.street ? brewery.street : 'N/A'}</Card.Description>
            <Card.Description>{` ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}</Card.Description>
            <Card.Description><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">Link to website</a></Card.Description>
            <Button basic onClick={this.handleClick}>More Details</Button>
          </Card.Content>
      </Card>
    )
  }
}

export default connect(null, { toggleView, selectedBrewery })(Brewery);
