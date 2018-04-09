 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import PortfolioSummaryView from './PortfolioSummaryView.js'
 import axios from 'axios';
 //import HeaderApp from '../components/HeaderApp.js';
 class PortfolioPage extends Component {
     constructor() {
         super();
         this.updateCompanies = this.updateCompanies.bind(this);
         this.toggleSummary = this.toggleSummary.bind(this);
         this.logout = this.logout.bind(this);
     }

     state = {
         userPortfolio: [],
         companies: [],
         pricesClose: [],
         summary: false,
         userId: 2
     }

     toggleSummary() {
         this.setState(prevState => ({
             summary: !prevState.summary
         }));

     }
     logout() {
         window.location.pathname = '/';
     }

     updateCompanies() {
         var updateArray = this.state.userPortfolio;
         for (let i = 0; i < updateArray.length; i++) {
             for (let j = 0; j < this.state.companies.length; j++) {
                 if (this.state.companies[j].symbol === updateArray[i].symbol) {
                     updateArray[i].name = this.state.companies[j].name;
                 }
             }
         }

         for (let i = 0; i < updateArray.length; i++) {
             for (let j = 0; j < this.state.pricesClose.length; j++) {
                 if (this.state.pricesClose[j].name === updateArray[i].symbol) {
                     updateArray[i].price = this.state.pricesClose[j].close;
                 }
             }
         }


         this.setState({ userPortfolio: updateArray });
     }


     componentDidMount() {
         this.setState({ userId: this.props.match.params.userId })
         axios.get('https://rocky-temple-19031.herokuapp.com/portfolio/' + this.props.match.params.userId)
             .then(res => {
                 const userPortfolio = res.data;

                 this.setState({ userPortfolio });
             })
         axios.get('https://rocky-temple-19031.herokuapp.com/companies/')
             .then(res => {
                 const companies = res.data;

                 this.setState({ companies });
             })
         axios.get('https://rocky-temple-19031.herokuapp.com/prices/allLastPrices/')
             .then(res => {
                 const pricesClose = res.data;

                 this.setState({ pricesClose });
             })
         //make sure all requests are finished before needed for rendering
         setTimeout(this.updateCompanies, 1000);

     }



     render() {
         if (this.state.summary) {
             return (

                 <PortfolioSummaryView toggleSummary={this.toggleSummary} updatedPorfolio= {this.state.userPortfolio} id={this.props.match.params.userId}/>
             )
         }
         else {
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
                to={ {pathname: "/home/" + this.state.userId}}>Home</Link>
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
                to={ {pathname: "/home/" + this.state.userId }}>Home</Link></li>
                <li>Portfolio</li>

                  </ul>
                </nav>
                
                <a className = 'button is-info' >
                    List
                </a>
                
             
                <a className = 'button'onClick={this.toggleSummary}>
                    Summary
                </a>
                 
                <div className='columns'>
                <div id="title" className='column is-centered is-three-fifths is-offset-one-fifth'>
                </div>
                </div>
                 <article className="message column is-10 is-offset-1 is-info">
                    <table id="stockPort"
                    class="table is-centered">
                     <thead>
                        <tr>
                          <th><a>Symbol</a></th>
                          <th><a>Name</a></th>
                          <th><a>Amount</a></th>
                          <th><a>Price</a></th>
                         </tr>
                            </thead>
                        {this.state.userPortfolio.map(function(obj,index){
                            return <tr>
                                    <td>{obj.symbol}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.owned}</td>
                                    <td>{obj.price}</td>
                                    
                                    </tr>
                        })}
                        
                  
                  </table>
                  </article>
                </div>
            </article>
            </div>
             )
         }
     }
 }

 export default PortfolioPage;
 