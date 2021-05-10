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

  //Function to from latitud and longitude the next available airports
  const getUserData = async () => {
    try {
      //get  latitud and longitude
      const res1 = await Axios('https://ipapi.co/json/');
      //calling skypicker API with latitud and longitude and get nex available airport
      const res2 = await Axios.get(
        `https://api.skypicker.com/locations?type=radius&lat=${res1.data.latitude}&lon=${res1.data.longitude}&location_types=airport`
      );
      //process response and storage in a variable
      setPosiblePlaces(getListAiportByCity(res2.data.locations));
    } catch (error) {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Router>
      <div className="Main">
        {/*Static Navigation responseve bar */}
        <Nav />
        {/*Search form, we use posiblePlaces that we got with lantitude and longitude*/}
        <Search posiblePlaces={posiblePlaces} disableSearch={disableSearch} />
        <div className="index-info-container">
          {/*We use swtich and depends the path is the component we render*/}
          <ChoosePath
            enableSearh={enableSearh}
            posiblePlaces={posiblePlaces}
            disableSearch={disableSearch}
            getUserData={getUserData}
          />
        </div>
        {/*Static Footer */}
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
      {/*If there is a query we use component FlyList make a map and create the necessary  FlyListItems */}
      <Route
        path="/searh/:query"
        render={(props) => (
          <FlyList key={Date.now()} enableSearh={enableSearh} />
        )}
      />
      {/*Render static info about us */}
      <Route path="/about" render={(props) => <About />} />
      {/*Render offers, this offers a dinamic flyFrom thats depends for your location, so the result of the search will change depending latitude and longitude*/}
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
