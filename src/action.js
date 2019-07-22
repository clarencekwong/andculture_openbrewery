export function selectedBrewery(brewery) {
  return { type: "SELECT_BREWERY", payload: brewery }
}

export function toggleView() {
  return { type: "TOGGLE_BREWERY_INFO" }
}

export function toggleReset() {
  return { type: "RESET_TOGGLE_VIEW"}
}
