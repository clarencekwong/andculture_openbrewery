const initialBreweryState = {
  brewery: [],
  toggleView: false,
  selectedBrewery: null,
}

function breweryReducer(state = initialBreweryState, action) {
  switch (action.type) {
    case "GET_BREWERY":
      return {...state, brewery: action.payload}
    case "TOGGLE_BREWERY_INFO":
      return {...state, toggleView: !state.toggleView}
    case "RESET_TOGGLE_VIEW":
      return {...state, toggleView: false}
    case "SELECT_BREWERY":
      return {...state, selectedBrewery: action.payload}
    default:
      return state
  }
}

export default breweryReducer
