import React from 'react';
import './sass/App.scss';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Settings from './pages/Settings';


function App() {
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/settings' component={Settings} />

        <Route path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
