import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Chart = window.Chart;

class StockVisualizer extends Component {
    constructor(props) {
        super();
        this.chartPopulate = this.chartPopulate.bind(this);
        this.monthChange = this.monthChange.bind(this);
        this.companyOneChange = this.companyOneChange.bind(this);
        this.companyTwoChange = this.companyTwoChange.bind(this);
        this.companyThreeChange = this.companyThreeChange.bind(this);
        this.logout = this.logout.bind(this);

    }
    logout() {
        window.location.pathname = '/';
    }


    state = {
        PortfolioData: [],
        monthValue: "01",
        companyOne: [{ name: "Choose A Company" }],
        companyTwo: [{ name: "Choose A Company" }],
        companyThree: [{ name: "Choose A Company" }],
        companyOneDays: [],
        companyOnePrice: [],
        companyTwoDays: [],
        companyTwoPrice: [],
        companyThreeDays: [],
        companyThreePrice: []
    }

    monthChange(e) {
        var monthValue = e.target.value;
        this.setState({ monthValue });
        axios.get('https://rocky-temple-19031.herokuapp.com/prices/month-prices/' + this.state.companyOne[0].name + '/' + monthValue)
            .then(res => {
                let companyOne = res.data;
                let companyOneDays = [];
                let companyOnePrice = [];

                for (let i = 0; i < companyOne.length; i++) {
                    companyOneDays[i] = companyOne[i].day;
                    companyOnePrice[i] = companyOne[i].close;
                }

                this.setState({ companyOneDays });
                this.setState({ companyOnePrice });

            })
        axios.get('https://rocky-temple-19031.herokuapp.com/prices/month-prices/' + this.state.companyTwo[0].name + '/' + monthValue)
            .then(res => {
                let companyTwo = res.data;
                let companyOneDays = [];
                let companyTwoPrice = [];

                for (let i = 0; i < companyTwo.length; i++) {
                    companyOneDays[i] = companyTwo[i].day;
                    companyTwoPrice[i] = companyTwo[i].close;
                }

                this.setState({ companyOneDays });
                this.setState({ companyTwoPrice });

            })
        axios.get('https://rocky-temple-19031.herokuapp.com/prices/month-prices/' + this.state.companyThree[0].name + '/' + monthValue)
            .then(res => {
                let companyThree = res.data;
                let companyOneDays = [];
                let companyThreePrice = [];

                for (let i = 0; i < companyThree.length; i++) {
                    companyOneDays[i] = companyThree[i].day;
                    companyThreePrice[i] = companyThree[i].close;
                }

                this.setState({ companyOneDays });
                this.setState({ companyThreePrice });
            })

        this.chartPopulate();
    }

    companyOneChange(e) {
        var companyChoice = e.target.value;
        axios.get('https://rocky-temple-19031.herokuapp.com/prices/month-prices/' + companyChoice + '/' + this.state.monthValue)
            .then(res => {
                const companyOne = res.data;
                const companyOneDays = [];
                const companyOnePrice = [];

                for (let i = 0; i < companyOne.length; i++) {
                    companyOneDays[i] = companyOne[i].day;
                    companyOnePrice[i] = companyOne[i].close;
                }

                this.setState({ companyOneDays });
                this.setState({ companyOnePrice });
                this.setState({ companyOne });
                this.chartPopulate();
            })
    }

    companyTwoChange(e) {
        var companyChoiceTwo = e.target.value;
        axios.get('https://rocky-temple-19031.herokuapp.com/prices/month-prices/' + companyChoiceTwo + '/' + this.state.monthValue)
            .then(res => {
                const companyTwo = res.data;
                const companyOneDays = [];
                const companyTwoPrice = [];

                for (let i = 0; i < companyTwo.length; i++) {
                    companyOneDays[i] = companyTwo[i].day;
                    companyTwoPrice[i] = companyTwo[i].close;
                }

                this.setState({ companyOneDays });
                this.setState({ companyTwoPrice });
                this.setState({ companyTwo });
                this.chartPopulate();
            })
    }

    companyThreeChange(e) {
        var companyChoiceThree = e.target.value;
        axios.get('https://rocky-temple-19031.herokuapp.com/prices/month-prices/' + companyChoiceThree + '/' + this.state.monthValue)
            .then(res => {
                const companyThree = res.data;
                const companyOneDays = [];
                const companyThreePrice = [];

                for (let i = 0; i < companyThree.length; i++) {
                    companyOneDays[i] = companyThree[i].day;
                    companyThreePrice[i] = companyThree[i].close;
                }

                this.setState({ companyOneDays });
                this.setState({ companyThreePrice });
                this.setState({ companyThree });
                this.chartPopulate();
            })
    }


    //http://www.chartjs.org/docs/latest/ reference material
    chartPopulate() {
        new Chart(document.getElementById("myChart"), {
            type: 'line',
            data: {
                labels: this.state.companyOneDays,
                datasets: [{
                    data: this.state.companyOnePrice,
                    label: this.state.companyOne[0].name,
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: this.state.companyTwoPrice,
                    label: this.state.companyTwo[0].name,
                    borderColor: "#228B22",
                    fill: false
                }, {
                    data: this.state.companyThreePrice,
                    label: this.state.companyThree[0].name,
                    borderColor: "#8B0000",
                    fill: false
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                }
            }
        });

    }




    componentDidMount() {
        axios.get('https://rocky-temple-19031.herokuapp.com/portfolio/2')
            .then(res => {
                const PortfolioData = res.data;

                this.setState({ PortfolioData });
            })

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
                
                <li><Link className="navbar-item is-tab "
                to={ {pathname: "/companies/" + this.props.match.params.userId}}>Companies</Link></li>
                
                <li className="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>Single Company</Link></li>
                </ul>
                
                </nav>
                
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select ref="monthSelect" onChange={this.monthChange}>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">Septmeber</option>
                    <option value="10">November</option>
                    <option value="11">October</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
              </div>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select ref="stockOneSelect" onChange={this.companyOneChange}>
                  {this.state.PortfolioData.map(function(obj,index){
                           return <option value={obj.symbol}>{obj.symbol}</option>
                        })}
                  </select>
                </div>
              </div>
              </div>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select ref="stockTwoSelect" onChange={this.companyTwoChange}>
                  {this.state.PortfolioData.map(function(obj,index){
                           return <option value={obj.symbol}>{obj.symbol}</option>
                        })}
                  </select>
                </div>
              </div>
              </div>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select ref="stockThreeSelect" onChange={this.companyThreeChange}>
                  {this.state.PortfolioData.map(function(obj,index){
                           return <option value={obj.symbol}>{obj.symbol}</option>
                        })}
                  </select>
                </div>
              </div>
              </div>

                <canvas id="myChart" width="300" height="200"></canvas>
            
                
                </section>
       
            </article>
            </div>



        )
    }


}

export default StockVisualizer;
