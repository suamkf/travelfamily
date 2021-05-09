import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import IndexInfo from './components/IndexInfo';
import Footer from './components/Footer';
import FlyList from './components/FlyList';
import About from './components/About';
import { getListAiportByCity } from './utils/funtion-utilities';

function App() {
  const [posiblePlaces, setPosiblePlaces] = useState([[]]);
  const [enableSearh, setEnableSearch] = useState(false);

  const disableSearch = (state) => {
    setEnableSearch(state);
  };

  const getUserData = async () => {
    try {
      const res1 = await Axios('https://ipapi.co/json/');

      const res2 = await Axios.get(
        `https://api.skypicker.com/locations?type=radius&lat=${res1.data.latitude}&lon=${res1.data.longitude}&location_types=airport`
      );

      setPosiblePlaces(getListAiportByCity(res2.data.locations));
    } catch (error) {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Router>
      <div className="Main">
        <Nav />
        <Search posiblePlaces={posiblePlaces} disableSearch={disableSearch} />
        <div className="index-info-container">
          <ChoosePath
            enableSearh={enableSearh}
            posiblePlaces={posiblePlaces}
            disableSearch={disableSearch}
            getUserData={getUserData}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const ChoosePath = ({
  enableSearh,
  posiblePlaces,
  disableSearch,
  getUserData,
}) => {
  return (
    <Switch>
      <Route
        path="/searh/:query"
        render={(props) => (
          <FlyList key={Date.now()} enableSearh={enableSearh} />
        )}
      />
      <Route path="/about" render={(props) => <About />} />
      <Route
        path="/"
        render={(props) => (
          <IndexInfo
            posiblePlaces={posiblePlaces}
            disableSearch={disableSearch}
            getUserData={getUserData}
          />
        )}
      />
    </Switch>
  );
};
export default App;
