import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import Header from './components/Header';

import { getCountriesNamesList } from './store/actions/trackerAction';

import './styles/global.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesNamesList());
  })

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path = { process.env.PUBLIC_URL + '/country/:name' } component = { CountryPage }/>
          <Route exact path = { process.env.PUBLIC_URL + '/'} component = { HomePage }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
