import React from 'react';
import './styles/App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Recipies from './pages/Recipies';
import Easyswaps from './pages/Easyswaps';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/recipies" component={Recipies} />
              <Route path="/easyswaps" component={Easyswaps} />
              <Route path="/contact" component={Contact} />
            </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
