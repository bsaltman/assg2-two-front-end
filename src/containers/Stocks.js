import stocks from '../stocks.json';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stocks extends Component {
    constructor(props){
        super(props);
        this.state = {
            allStocks : []
        }
    }

    render() {
        //Come back and fix Styling 
        return (
            <article class="message columns is-10 is-offset-1 is-info">
                    
                    <div className = "column is-10 is-offset-1">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                        <li className="is-active"><Link className="navbar-item is-tab "
                        to={ {pathname: "/users"}}>Stocks</Link></li>
                            
        
                          </ul>
                        </nav>
                    <article className="section stockList columns is-multiline">
                    <div className="column is-10 is-offset-1"><h1><strong>Stock List</strong></h1></div>
                    {stocks.map(function(obj,index){
                            return <div className ="column is-10 is-offset-1"><img className = "tableImages" alt ="" src={"/logos/" + obj.symbol + ".svg"}></img>
                                        <Link className ="button is-info" to={"/singleStock/" + index}><strong>{obj.name}</strong></Link> </div>
                                    
                        })}


                  </article>
                  </div>
                  </article>
        ); 
    }   

}

export default Stocks;
