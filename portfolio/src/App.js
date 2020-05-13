import React from 'react';
import './components/style/App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
import Welcome from './components/pages/Welcome';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div>
    <Header />
    <Router>
    <div className="uk-container">
    <Route exact path={process.env.PUBLIC_URL + '/'} render={ Welcome } />
    <Route exact path={process.env.PUBLIC_URL + '/portfolio'} component={ Portfolio } />
    </div>
    </Router>
    <Footer />
    </div>
  )
}

export default App;
