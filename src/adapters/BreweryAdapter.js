import store from '../store';

class BreweryAdapter {
  static breweryURL = 'https://andculture-ob-api.herokuapp.com/api/v1/breweries/by_city='

  static getBreweriesByCity(city) {
    return fetch(`${this.breweryURL}${city}`)
      .then(res => res.json())
      .then(brewery => {
        store.dispatch({type: "GET_BREWERY", payload: brewery})
      })
  }
}

export default BreweryAdapter;
