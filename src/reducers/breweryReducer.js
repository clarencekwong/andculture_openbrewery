const initialBreweryState = {
  brewery: []
}

function breweryReducer(state = initialBreweryState, action) {
  switch (action.type) {
    case "GET_BREWERY":
      return {...state, brewery: action.payload}
    default:
      return state
  }
}

export default breweryReducer
