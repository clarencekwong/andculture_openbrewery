import React from 'react'
import SearchForm from '../components/SearchForm'
import { Container } from 'semantic-ui-react'

class SearchContainer extends React.Component {
  render () {
    return (
      <Container>
        <SearchForm />
      </Container>
    )
  }
}

export default SearchContainer;
