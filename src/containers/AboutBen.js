import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class aboutBen extends Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }
    logout() {
        window.location.pathname = '/';
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
        
          <div id="navbarExampleTransparentExample" className={"navbar-menu "}>
            <div className="navbar-start">
            <Link className="navbar-item is-tab "
                to={ {pathname: "/home/" + this.props.match.params.userId}}>Home</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/portfolio/" + this.props.match.params.userId}}>Portfolio</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/companies/" + this.props.match.params.userId}}>Companies</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/stockVisualizer/" + this.props.match.params.userId}}>StockVisualizer</Link>
            </div>
          </div>
          <button className = 'button is-info' onClick={this.logout}>Log out</button>
        </nav>
            <article className="section columns">
                <section className="column is-three-fifths is-offset-one-fifth">
                
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home/" + this.props.match.params.userId}}>Home</Link></li>
                
                <li className="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>About Ben</Link></li>
                </ul>
                
                </nav>
            
                <img alt ="" id="singleStockImage"  src="#"></img>
                <div id ="singleStockDescription" className ="box">
                <strong>Ben Saltman - 201219703</strong><br></br>
                <strong>Fourth year BCIS student @ Mount Royal University</strong><br></br>
                <strong>Based on an assignment drafted by randy Connolly: <a href="https://github.com/rconnolly/comp4513-w2018-assign1">Base Repo</a></strong><br></br>
                <strong>Created via <a href="https://github.com/facebook/create-react-app">create-react-app</a></strong><br></br>
                <strong>Styling via: <a href="https://bulma.io/">Bulma Css FrameWork</a></strong><br></br>
                <strong>Tech/packages: Node, express, Mongo, Mongoose, react, router, chart.js socket.io(next implementation after the due date :()</strong>
                </div>
                
                </section>
       
            </article>
            </div>






        );
    }

}

export default aboutBen;
