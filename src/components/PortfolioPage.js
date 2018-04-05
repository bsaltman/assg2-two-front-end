 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 class PortfolioPage extends Component {
 render() {
     return(
 <article className="section columns is-centered">
                <div class="card column is-two-thirds"> 
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                <li><Link className="navbar-item is-tab "
                to={ {pathname: "/users"}}>Users</Link></li>
                    <li class="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>Portfolio</Link></li>

                  </ul>
                </nav>
                <a className = 'button is-info'onClick = {this.props.detailsTab}>
                    Details
                </a>
                
             
                <a className = 'button' onClick = {this.props.portfolioTab} >
                    Portfolio
                </a>
                 
                <div className='columns'>
                <div id="title" className='column is-centered is-three-fifths is-offset-one-fifth'>
                <strong>{this.props.userInfo.name}</strong><hr></hr>
                </div>
                </div>
                 <article className="message column is-10 is-offset-1 is-info">
                    <table id="stockPort"
                    class="table is-centered">
                     <thead>
                        <tr>
                          <th><a onClick={this.props.symbolSort}>Symbol</a></th>
                          <th><a onClick={this.props.nameSort}>Name</a></th>
                          <th><a onClick={this.props.amountSort}>Amount</a></th>
                         </tr>
                        
                        {this.props.currentUserStocks.map(function(obj,index){
                            return <tr>
                                    <td><Link className="navbar-item is-tab " to={ {pathname: "/SingleStock/" + obj.id}}>{obj.symbol}</Link></td>
                                    <td><Link className="navbar-item is-tab " to={ {pathname: "/SingleStock/" + obj.id}}>{obj.name}</Link></td>
                                    <td>{obj.amount}</td>
                                    
                                    </tr>
                        })}
                        
                      </thead>
                  </table>
                  </article>
                                
                </div>
         
            </article>
)}}

export default PortfolioPage;