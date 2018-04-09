import React, { Component } from 'react';
import axios from 'axios';
//import HeaderApp from '../components/HeaderApp.js';

import { NavLink } from 'react-router-dom';



class HomeBrowser extends Component {


    state = {
        userInfo: []
    }

    componentDidMount() {
        axios.get('https://rocky-temple-19031.herokuapp.com/users/id/' + this.props.match.params.userId)
            .then(res => {
                var userInfo = res.data;
                this.setState({ userInfo })

            });

    }
    render() {
        return (
            <section className="hero is-info is-fullheight">
            <article className="section columns is-multiline is-9">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <NavLink to={ {pathname:"/portfolio/" + this.props.match.params.userId}}
                        ><div className="card card-user">
                             <header class="card-header">
                                <p class="card-header-title">
                                  Browse Porfolio
                                </p>
                              </header>
                        </div></NavLink>
                    </div>
                    <div className="column is-three-fifths is-offset-one-fifth">
                         <NavLink to={ {pathname:"/companies/" + this.props.match.params.userId}}>
                            <div className="card card-portfolio">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Browse Companies
                                    </p>
                                </header>
                            </div>
                        </NavLink>
                    </div>
                    
                    <div className="column is-three-fifths is-offset-one-fifth">
                         <NavLink to={ {pathname:"/stockVisualizer/" + this.props.match.params.userId}}>
                            <div className="card card-stocks">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Stock visulaizer
                                    </p>
                                </header>
                            </div>
                        </NavLink>
                    </div>
                    
                    <div className="column is-three-fifths is-offset-one-fifth">
                         <NavLink to={ {pathname:"/aboutBen/" + this.props.match.params.userId}}>
                            <div className="card card-companies">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        About the developer
                                    </p>
                                </header>
                            </div>
                        </NavLink>
                    </div>
            </article>
            </section>
        );
    }
}

export default HomeBrowser;
