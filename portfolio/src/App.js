import React from 'react';
import './components/style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
import Welcome from './components/pages/Welcome';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div>
      <Header />
    <div className="uk-container">
    
    <Router>
    <Route exact path="/" component={ Welcome } />
    <Route exact path="/portfolio" component={ Portfolio } />
      

    </Router>
    </div>
    <Footer />
    </div>
  )
}

export default App;
