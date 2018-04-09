 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 //import axios from 'axios';
 class PortfolioSummaryView extends Component {

   state = {
     totalcompanies: 0,
     totalStocks: 0,
     totalValue: 0
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
   }


   render() {
     return (
       <article className="section columns is-centered">
                <div class="card column is-two-thirds"> 
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
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
            </div>
            </article>

     )
   }
 }

 export default PortfolioSummaryView;
 