import React from 'react';
import './App.css';
import BreweryContainer from './containers/BreweryContainer'
import SearchContainer from './containers/SearchContainer'
import { Divider } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <Divider />
      <BreweryContainer />
    </div>
  );
}

export default App;
