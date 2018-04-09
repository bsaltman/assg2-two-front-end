import React, { Component } from 'react';

//import HeaderApp from './components/HeaderApp.js';
import CompanyBrowser from './containers/CompanyBrowser.js';
import singleCompany from './containers/singleCompany.js';
import Home from './containers/Home.js';
import AboutBen from './containers/AboutBen.js';
import PortfolioPage from './containers/Portfolio.js';
import StockVisualizer from './containers/stockVisualizer.js';
import Login from './containers/Login.js'


import { Route } from 'react-router-dom';

import './App.css';


function requireAuth(nextState, replace) {
  if (true) {
    replace({
      pathname: '/Login'
    })
  }
}


class App extends Component {
  state = {
    test: 10
  }
  render() {
    return (
      <div>
        <main >
          <Route path="/" exact component={Login} />
          <Route path="/home/:userId" exact component={Home} onEnter={requireAuth}/>
          <Route path="/home/:userId" exact component={Home} onEnter={requireAuth}/>
          <Route path="/companies/:userId" exact component={CompanyBrowser} onEnter={requireAuth}/>
          <Route path="/singleCompany/:symbol/:userId" component={singleCompany} onEnter={requireAuth}/>
          <Route path="/portfolio/:userId" exact component={PortfolioPage} onEnter={requireAuth}/>
          <Route path="/stockVisualizer/:userId" exact component={StockVisualizer} onEnter={requireAuth}/>
          <Route path="/aboutBen/:userId" exact component={AboutBen} onEnter={requireAuth}/>
          
        </main>
      </div>

    );
  }
}

export default App;
