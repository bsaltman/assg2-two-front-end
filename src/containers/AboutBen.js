import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class aboutBen extends Component {
    
    render() {

        return (
        <article className="section columns">
                <section className="column is-three-fifths is-offset-one-fifth">
                
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                
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
                <strong>References...</strong>
                </div>
                
                </section>
       
            </article>
          
          
          
          


        ); 
    }   

}

export default aboutBen;