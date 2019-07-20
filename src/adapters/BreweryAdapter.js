import store from '../store'

class BreweryAdapter {
  static breweryURL = 'https://api.openbrewerydb.org/breweries?by_city='

  static getBreweriesByCity(city) {
    let sanitized_city = encodeURIComponent(city)
    console.log(`${this.breweryURL}${sanitized_city}`)
    return fetch(`${this.breweryURL}${sanitized_city}`)
      .then(res => res.json())
      .then(brewery => {
        store.dispatch({type: "GET_BREWERY", payload: brewery})
      })
  }
}

export default BreweryAdapter;
