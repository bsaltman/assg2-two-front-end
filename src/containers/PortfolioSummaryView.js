 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import axios from 'axios';
 //import HeaderApp from '../components/HeaderApp.js';
 const Chart = window.Chart;
 class PortfolioSummaryView extends Component {
     contructor() {

         this.chartPopulate = this.chartPopulate.bind(this);
         this.logout = this.logout.bind(this);
     }

     state = {
         totalcompanies: 0,
         totalStocks: 0,
         totalValue: 0,
         portBreakdown: [],
         labels: [],
         values: []
     }
     logout() {
         window.location.pathname = '/';
     }
     chartPopulate(labelsArray, dataArray) {
         var ctx = document.getElementById("myChart").getContext('2d');
         new Chart(ctx, {
             type: 'pie',
             data: {
                 labels: labelsArray,
                 datasets: [{
                     backgroundColor: [
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6",
                         "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e", "#2ecc71", "#3498db", "#95a5a6", "#9b59b6"

                     ],
                     data: dataArray
                 }]
             },
             options: {
                 legend: {
                     display: false
                 }
             }
         });
     }


     calculateTotal(portfolio) {
         let totalcompanies = 0;
         let totalStocks = 0;
         let totalValue = 0;
         for (let i = 0; i < portfolio.length; i++) {
             totalcompanies++;
             totalStocks = totalStocks + portfolio[i].owned;
             totalValue = totalValue + (portfolio[i].owned * portfolio[i].price);
         }
         this.setState({ totalcompanies });
         this.setState({ totalStocks });
         this.setState({ totalValue });
     }

     componentDidMount() {
         this.calculateTotal(this.props.updatedPorfolio);
         axios.get("https://rocky-temple-19031.herokuapp.com/portfolio/breakdown/" + this.props.id)
             .then(res => {
                 const portBreakdown = res.data;
                 const labels = [];
                 const value = [];
                 portBreakdown.map(function(obj, index) {
                     labels[index] = obj._id.symbol;
                     value[index] = (obj.totalOwned);
                     return true;
                 })
                 this.setState({ labels });
                 this.setState({ value });
                 this.chartPopulate(labels, value)

             })



     }


     render() {
         return (

             <div>
        <nav className="navbar is-primary">
          <div className="navbar-brand">
            <div className="navbar-item">
              <strong>BEN</strong>
            </div>
            <div className="navbar-burger burger" onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        
          <div id="navbarExampleTransparentExample" className={"navbar-menu " + (this.state.menuDrop ? "is-active" : "")}>
            <div className="navbar-start">
            <Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/portfolio/" + this.state.userId}}>Portfolio</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/companies/" + this.state.userId}}>Companies</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/stockVisualizer/" + this.state.userId}}>StockVisualizer</Link>
            </div>
          </div>
          <button className = 'button is-info' onClick={this.logout}>Log out</button>
        </nav>
                 <article className="section columns is-centered">
                <div class="card column is-two-thirds"> 
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home/" + this.props.id}}>Home</Link></li>
                <li><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>Portfolio</Link></li>

                  </ul>
                </nav>
                 
                <div className='columns'>
            <a className = 'button' onClick={this.props.toggleSummary}>
                    List
                </a>
                
             
                <a className = 'button is-info'>
                    Summary
                </a>
                
                <div className='columns'>
                <div id="title" className='column is-centered is-three-fifths is-offset-one-fifth'>
                </div>
                </div>
             <div class="columns">
                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title">
                          Total Comapnies
                        </p>
                      </header>
                      <div class="card-content">
                        <div class="content">
                            {this.state.totalcompanies}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="column">
                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title">
                          Total stocks Owned
                        </p>

                      </header>
                      <div class="card-content">
                        <div class="content">
                            {this.state.totalStocks}
                        </div>
                      </div>
                    </div>

                  </div>
                  </div>
                  <div class="column">
                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title">
                          Portfolio Value
                        </p>
                      </header>
                      <div class="card-content">
                        <div class="content">
                          {this.state.totalValue}
                        </div>
                      </div>
                    </div>

                  </div>
                  </div>
            </div>
            </div>
            <canvas id="myChart" width="300" height="200"></canvas>
     
            </div>
            
            </article>
            </div>


         )
     }
 }

 export default PortfolioSummaryView;
 