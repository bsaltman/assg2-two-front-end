import React, { Component } from 'react';


import { NavLink } from 'react-router-dom';



class HomeBrowser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    stateTest() {
        alert(this.state.test)
    }
    render() {
        return (
            <main>
            <article className="section columns is-multiline is-9">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <NavLink to={ {pathname:"/portfolio"}}
                        ><div className="card card-user">
                             <header class="card-header">
                                <p class="card-header-title">
                                  Browse Porfolio
                                </p>
                              </header>
                        </div></NavLink>
                    </div>
                    <div className="column is-three-fifths is-offset-one-fifth">
                         <NavLink to={ {pathname:"/companies"}}>
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
                         <NavLink to={ {pathname:"/stockVisualizer"}}>
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
                         <NavLink to={ {pathname:"/aboutBen"}}>
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
            </main>
        );
    }
}

export default HomeBrowser;
