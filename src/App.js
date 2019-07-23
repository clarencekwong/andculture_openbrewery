import React from 'react';
import './style/App.scss';
import BreweryContainer from './containers/BreweryContainer'
import SearchContainer from './containers/SearchContainer'
import { Divider } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h1>FIND YOUR LOCAL BREWERY</h1>
        <SearchContainer />
        <Divider />
      </div>
        <BreweryContainer />
    </div>
  );
}

export default App;
