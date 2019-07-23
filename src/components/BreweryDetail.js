import React from 'react';
import { Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toggleView } from '../action';
import GoogleMapReact from 'google-map-react';

import GoogleMarker from './GoogleMarker';

class BreweryDetail extends React.Component {

  handleClick = () => {
    this.props.toggleView();
  }

  render () {
    const { selectedBrewery } = this.props;
    const lat = parseFloat(selectedBrewery.latitude);
    const lng = parseFloat(selectedBrewery.longitude);
    const center = { lat, lng };
    return (
      <div>
        <h1>{selectedBrewery.name}</h1>
        <p>{selectedBrewery.street ? selectedBrewery.street : 'N/A'}</p>
        <p>{` ${selectedBrewery.city}, ${selectedBrewery.state}, ${selectedBrewery.postal_code}`}</p>
        <a href={selectedBrewery.website_url} target="_blank" rel="noopener noreferrer">Link to website</a>
        <Divider />
        { lat && lng ?
        <div style={{ height: '60vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultCenter={center}
            defaultZoom={10}
          >
            <GoogleMarker
              lat={lat}
              lng={lng}
              text={selectedBrewery.name}
            />
          </GoogleMapReact>
        </div> :
          <div>
            <h3>No latitude or longitude found, no map display available...</h3>
          </div>
        }
        <Divider />
        <Button onClick={this.handleClick}>Back</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedBrewery: state.brewery.selectedBrewery
  }
}

export default connect(mapStateToProps, { toggleView })(BreweryDetail);
