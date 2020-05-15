import React from 'react';
import './sass/App.scss';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
