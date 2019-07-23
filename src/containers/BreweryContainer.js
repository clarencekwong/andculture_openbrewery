import React from 'react';
import BreweryList from '../components/BreweryList';
import BreweryDetail from '../components/BreweryDetail';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

class BreweryContainer extends React.Component {
  render () {
    const { toggleView } = this.props;
    return (
      <Container>
        {toggleView ? <BreweryDetail /> : <BreweryList />}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    toggleView: state.brewery.toggleView,
  }
}

export default connect(mapStateToProps)(BreweryContainer);
