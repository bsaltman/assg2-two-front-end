import React, { Component } from 'react';


import { NavLink } from 'react-router-dom';



class HomeBrowser extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        return (
            <main>
            <article className="section columns is-multiline is-9">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <NavLink to={ {pathname:"/users"}}
                        ><div className="card card-user">
                             <header class="card-header">
                                <p class="card-header-title">
                                  Browse Users
                                </p>
                              </header>
                        </div></NavLink>
                    </div>
                    <div className="column is-three-fifths is-offset-one-fifth">
                         <NavLink to={ {pathname:"/stocks"}}>
                            <div className="card card-portfolio">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Browse Stocks
                                    </p>
                                </header>
                            </div>
                        </NavLink>
                    </div>
                    
                    <div className="column is-three-fifths is-offset-one-fifth">
                         <NavLink to={ {pathname:"/aboutBen"}}>
                            <div className="card card-companies">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        About Ben
                                    </p>
                                </header>
                            </div>
                        </NavLink>
                    </div>

            </article>
            </main>
        );
    }
}

export default HomeBrowser;