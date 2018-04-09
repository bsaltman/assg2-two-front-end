import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class CompanyBrowser extends Component {
    constructor(props) {
        super();
        this.logout = this.logout.bind(this);
    }

    state = {
        companies: [],
        test: 0,
    }
    logout() {
        window.location.pathname = '/';
    }

    componentDidMount() {


        axios.get(`https://rocky-temple-19031.herokuapp.com/companies/`)
            .then(res => {
                const companies = res.data;
                console.log("yes");
                this.setState({ companies });
            })
        var userId = this.props.match.params.userId;
        this.setState({ userId });

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
                to={ {pathname: "/home/"+ this.state.userId}}>Home</Link>
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
            <article class="message columns is-10 is-offset-1 is-info">
                
                    <div className = "column is-10 is-offset-1">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home/" + this.props.match.params.userId}}>Home</Link></li>
                        <li className="is-active"><Link className="navbar-item is-tab "
                        to={ {pathname: "#"}}>Companies</Link></li>
                            
        
                          </ul>
                        </nav>
                    <article className="section stockList columns is-multiline">
                    <div className="column is-10 is-offset-1"><h1><strong>Companies</strong></h1></div>
                    {this.state.companies.map(function(obj,index){
                            return <div className ="column is-10 is-offset-1"><img className = "tableImages" alt ="" src={"/logos/" + obj.symbol + ".svg"}></img>
                                        <Link className ="button is-info" params={{symbol: obj.symbol}}to={"/singleCompany/" + obj.symbol  +"/" + this.state.userId }><strong>{obj.name}</strong></Link> </div>
                                    
                        },this)}


                  </article>
                  </div>

                  </article></div>)

    }
}

export default CompanyBrowser;
