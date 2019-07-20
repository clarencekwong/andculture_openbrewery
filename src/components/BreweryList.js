import React from 'react'
import Brewery from './Brewery'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Card } from 'semantic-ui-react'

class BreweryList extends React.Component {

  renderBreweries = () => {
    return this.props.brewery.map(brewery => <Brewery key={uuid()} brewery={brewery}/>)
  }

  render () {
    return (
      <Card.Group itemsPerRow="4">
        {this.renderBreweries()}
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state.brewery.brewery)
  return {
    brewery: state.brewery.brewery
  }
}

export default connect(mapStateToProps)(BreweryList);
