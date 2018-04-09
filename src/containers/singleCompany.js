import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CompanyListView from '../components/CompanyListView.js'
const Chart = window.Chart;



class singleCompany extends Component {
    constructor(props) {
        super();
        this.chartPopulate = this.chartPopulate.bind(this);
        this.toggleView = this.toggleView.bind(this);
    }


    state = {
        companyData: [],
        monthlyData: [],
        monthlyAverage: [],
        toggleChart: false,
        chartDataSet: []


    }

    toggleView() {
        this.setState((prevState, props) => {
            return { toggleChart: !prevState.toggleChart };
        });
    }

    //http://www.chartjs.org/docs/latest/ reference material
    chartPopulate(monthAverageArray) {
        var ctx = document.getElementById("myChart").getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                datasets: [{
                    label: 'monthly closing',
                    data: monthAverageArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }]
                }
            }
        });

    }

    componentDidMount() {
        axios.get(`https://rocky-temple-19031.herokuapp.com/companies/` + this.props.match.params.symbol)
            .then(res => {
                const companyData = res.data;
                console.log(companyData);
                this.setState({ companyData });
            })

        axios.get(`https://rocky-temple-19031.herokuapp.com/prices/month-average/` + this.props.match.params.symbol)
            .then(res => {
                const monthlyData = res.data;
                console.log(monthlyData);
                this.setState({ monthlyData });
                const chartData = [];
                this.state.monthlyData.map(function(obj, index) {
                    chartData[index] = obj.monthlyAverage;
                    return chartData;
                })
                this.setState((prevState, props) => {
                    return { chartDataSet: chartData };
                });
                if (this.state.toggleChart) {
                    this.chartPopulate(chartData);
                }
            })
    }

    componentDidUpdate() {
        if (this.state.toggleChart) {
            this.chartPopulate(this.state.chartDataSet);
        }

    }



    render() {
        if (this.state.toggleChart) {
            return (
                <article className="section columns">
                <section className="column is-three-fifths is-offset-one-fifth">
                
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                
                <li><Link className="navbar-item is-tab "
                to={ {pathname: "/companies"}}>Companies</Link></li>
                
                <li className="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>Single Company</Link></li>
                </ul>
                
                </nav>
            {this.state.companyData.map(function(obj,index){
                            return (
                                    <div>
                                    <img alt ="" id="singleStockImage"  src={"/logos/" + obj.symbol + ".svg"}></img>
                            
                                    <div id ="singleStockDescription" className ="box">
                                        <h1>Symbol: {obj.symbol}</h1>
                                        <h1>Name: {obj.name}</h1>
                                        <h1>Sector: {obj.sector}</h1>
                                        <h1>Sub-Industry: {obj.subIndustry}</h1>
                                        <h1>Address: {obj.address}</h1>
                                    </div>
                                    </div>
                                    )
                                    
                        })}
            <a className = 'button is-info' onClick = {this.toggleView} >
                    View List
                </a>
                <canvas id="myChart" width="300" height="200"></canvas>
            
                
                </section>
       
            </article>



            )
        }
        else
            return (
                <article className="section columns">
                <section className="column is-three-fifths is-offset-one-fifth">
                
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                
                <li><Link className="navbar-item is-tab "
                to={ {pathname: "/companies"}}>Companies</Link></li>
                
                <li className="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "#"}}>Single Company</Link></li>
                </ul>
                
                </nav>
            {this.state.companyData.map(function(obj,index){
                            return (
                                    <div>
                                    <img alt ="" id="singleStockImage"  src={"/logos/" + obj.symbol + ".svg"}></img>
                            
                                    <div id ="singleStockDescription" className ="box">
                                        <h1>Symbol: {obj.symbol}</h1>
                                        <h1>Name: {obj.name}</h1>
                                        <h1>Sector: {obj.sector}</h1>
                                        <h1>Sub-Industry: {obj.subIndustry}</h1>
                                        <h1>Address: {obj.address}</h1>
                                    </div>
                                    </div>
                                    )
                                    
                        })}
                <a className = 'button is-info' onClick = {this.toggleView} >
                    View Chart
                </a>
             <CompanyListView symbol= {this.props.match.params.symbol}/>
            
               </section>
       
            </article>)
    }
}

export default singleCompany;
