import React, { Component } from 'react';
class PortfolioBrowser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolios: []
        };
    }

    render() {
        return (
            <article className="section columns">
                Portfolio
            </article>
        );
    }
}

export default PortfolioBrowser;