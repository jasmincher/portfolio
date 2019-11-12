import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';





function App() {
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>


    </div>
  );
}

export default App;
