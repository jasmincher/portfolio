import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';





function App() {
  return (
    <div className="App">

<Switch>
  <Route exact path='/' component={Home} />
  {/* <Route path='/' component={} />
  <Route path='/' component={} /> */}
  <Route component={NotFound} />

</Switch>


    </div>
  );
}

export default App;
