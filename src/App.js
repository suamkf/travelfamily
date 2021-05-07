import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import IndexInfo from './components/IndexInfo';
import Footer from './components/Footer';
import FlyList from './components/FlyList';

function App() {
  return (
    <Router>
      <div className="Main">
        <Nav />
        <Search />

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
      <Route path="/" render={(props) => <IndexInfo />} />
    </Switch>
  );
};
export default App;
