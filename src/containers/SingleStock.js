import stocks from '../stocks.json';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleStock extends Component {
    constructor(props){
        super(props);
        this.state = {
            allStocks : []
        }
    }
    
    
    render() {

        return (
        <article className="section columns">
                <section className="column is-three-fifths is-offset-one-fifth">
                
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                
                <li><Link className="navbar-item is-tab "
                to={ {pathname: "/stocks"}}>Stocks</Link></li>
                
                <li className="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>Stock</Link></li>
                </ul>
                
                </nav>
            
                <img alt ="" id="singleStockImage"  src={"/logos/" + stocks[this.props.match.params.id].symbol + ".svg"}></img>
                <div id ="singleStockDescription" className ="box">
                <h1>Symbol: {stocks[this.props.match.params.id].symbol}</h1>
                <h1>Name: {stocks[this.props.match.params.id].name}</h1>
                <h1>Sector: {stocks[this.props.match.params.id].sector}</h1>
                <h1>Sub-Industry: {stocks[this.props.match.params.id].subIndustry}</h1>
                <h1>Address: {stocks[this.props.match.params.id].address}</h1>
                </div>
                
                </section>
       
            </article>
          
          
          
          


        ); 
    }   

}

export default SingleStock;