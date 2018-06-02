import React from 'react';
import Dash from './pages/dash';
import FoodP from './pages/foodform';
import PushP from './pages/pushform';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div className="screenview">
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Dash} />
        <Route exact path="/food" component={FoodP} />
        <Route exact path="/push" component={PushP} />
      </Switch>
    </div>
  </Router>;

export default App;
