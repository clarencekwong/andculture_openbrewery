import React from 'react'
import BreweryList from '../components/BreweryList'
import { Container } from 'semantic-ui-react'

class BreweryContainer extends React.Component {
  render () {
    return (
      <Container>
        <BreweryList />
      </Container>
    )
  }
}

export default BreweryContainer;
