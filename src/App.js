import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Index from './views/index/Index';

function App() {
  return (
    <Router>
      <div className="Main">
        <Nav />
        <Index />
      </div>
    </Router>
  );
}

export default App;
