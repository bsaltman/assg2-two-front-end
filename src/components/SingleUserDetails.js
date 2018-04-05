 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 class SingleUserDetails extends Component {
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
                to={ {pathname: "#"}}>user</Link></li>

                  </ul>
                </nav>
                
                <a className = 'button'onClick = {this.props.detailsTab}>
                    Details
                </a>
                
             
                <a className = 'button is-info' onClick = {this.props.portfolioTab} >
                    Portfolio
                </a>
                 
                <div className='columns'>
                <div className='column is-centered is-three-fifths is-offset-one-fifth'>
                <strong>{this.props.userInfo.name}</strong><hr></hr>

                <strong>Id:</strong>{" " + this.props.id}<br></br>
                <strong>website:</strong>{" " + this.props.userInfo.website}<br></br>
                <strong>Contact</strong>
                <strong>email:</strong>{" " + this.props.userInfo.email}<br></br>
                <strong>phone:</strong>{" " + this.props.userInfo.phone}
                </div>
                </div>
                

                    <article class="message column is-10 is-offset-1 is-info">
                         <div class="message-header">
                            Company <a className ="button is-primary" onClick={this.props.toggleCompany}>
                            {(this.props.showCompany ? <i className = 'fas fa-arrow-circle-up'></i> :
                                <i className = 'fas fa-arrow-circle-down'></i>
                            )}
                            </a> 
                        </div>
                        { this.props.showCompany ?
                        <div class="message-body">
                            <strong>{this.props.userInfo.company.name}</strong>
                            <br></br>
                            <i>{this.props.userInfo.company.catchPhrase}</i>
                            <br></br>
                            {this.props.userInfo.company.bs}
                        </div> : null}
                        <article class="message is-info is-10 is-offset-1 is-info">
                        </article>
                         <div class="message-header">
                            Address <a className ="button is-primary" onClick={this.props.toggleAddress}>
                            {(this.props.showAddress ? <i className = 'fas fa-arrow-circle-up'></i> :
                                <i className = 'fas fa-arrow-circle-down'></i>
                            )}
                            </a>
                        </div>
                        { this.props.showAddress ?
                        <div class="message-body">
                            <strong>Street Address</strong>{": " + this.props.userInfo.address.street + ", " + this.props.userInfo.address.suite}
                            <br></br>
                            <strong>City</strong>{": " + this.props.userInfo.address.city}
                            <br></br>
                            <strong>Zip</strong>{": " +this.props.userInfo.address.zipcode}
                            <br></br>
                            <strong>Latitude: </strong>{" " + this.props.userInfo.address.geo.lat + " "}
                            <strong>Longitude: </strong>{" " + this.props.userInfo.address.geo.lng}
                            
                        </div> : null}
                    </article>
                
                </div>
         
            </article>
)}}

export default SingleUserDetails;