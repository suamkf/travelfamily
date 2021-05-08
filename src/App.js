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

  const getDataServerByPlace = async (place) => {
    const res2 = await Axios(
      `https://api.skypicker.com/locations?term=${place}&location_types=airport&sort=rank`
    );

    setPosiblePlaces(getListAiportByCity(res2.data.locations));
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

  const changeList = async (place) => {
    await getDataServerByPlace(place);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Router>
      <div className="Main">
        <Nav />
        <Search posiblePlaces={posiblePlaces} changeList={changeList} />
        <div className="index-info-container">
          <ChoosePath />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const ChoosePath = () => {
  return (
    <Switch>
      <Route path="/searh/:query" render={(props) => <FlyList />} />
      <Route path="/about" render={(props) => <About />} />
      <Route path="/" render={(props) => <IndexInfo />} />
    </Switch>
  );
};
export default App;
