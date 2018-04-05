import React, { Component } from 'react';

import HeaderApp from './components/HeaderApp.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import PortfolioBrowser from './containers/PortfolioBrowser.js';
import UserBrowser from './containers/UserBrowser.js';
import Home from './containers/Home.js';
import SingleUser from './containers/SingleUser.js';
import Stocks from './containers/Stocks.js';
import SingleStock from './containers/SingleStock.js';
import AboutBen from './containers/AboutBen.js';

import { Route } from 'react-router-dom';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <HeaderApp />
        <main >
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/users" exact component={UserBrowser} />
          <Route path="/companies" exact component={CompanyBrowser} />
          <Route path="/portfolio" exact component={PortfolioBrowser} />
          <Route path="/user/:id" exact component={SingleUser} />
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/singleStock/:id" exact component={SingleStock} />
          <Route path="/aboutBen" exact component={AboutBen} />
        </main>
      </div>
    );
  }
}

export default App;
