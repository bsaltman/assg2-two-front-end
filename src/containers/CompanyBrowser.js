import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class CompanyBrowser extends Component {

    state = {
        companies: []
    }

    componentDidMount() {
        axios.get(`https://rocky-temple-19031.herokuapp.com/companies/`)
            .then(res => {
                const companies = res.data;
                console.log("yes");
                this.setState({ companies });
            })
    }

    render() {
        return (
            <article class="message columns is-10 is-offset-1 is-info">
                    
                    <div className = "column is-10 is-offset-1">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                        <li className="is-active"><Link className="navbar-item is-tab "
                        to={ {pathname: "/users"}}>Companies</Link></li>
                            
        
                          </ul>
                        </nav>
                    <article className="section stockList columns is-multiline">
                    <div className="column is-10 is-offset-1"><h1><strong>Companies</strong></h1></div>
                    {this.state.companies.map(function(obj,index){
                            return <div className ="column is-10 is-offset-1"><img className = "tableImages" alt ="" src={"/logos/" + obj.symbol + ".svg"}></img>
                                        <Link className ="button is-info" params={{symbol: obj.symbol}}to={"/singleCompany/" + obj.symbol}><strong>{obj.name}</strong></Link> </div>
                                    
                        })}


                  </article>
                  </div>
                  </article>)
    }
}

export default CompanyBrowser;
