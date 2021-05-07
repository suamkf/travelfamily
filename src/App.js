import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import IndexInfo from './components/IndexInfo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="Main">
        <Nav />
        <Search />
        <IndexInfo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
