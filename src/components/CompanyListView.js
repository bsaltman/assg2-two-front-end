// /prices/month-prices/:symb/:month
import React, { Component } from 'react';
import axios from 'axios';

class CompanyListView extends Component {
    constructor() {
        super();
        this.monthChosen = this.monthChosen.bind(this);
    }
    state = {
        companyMonthData: [],


    }

    monthChosen(e) {
        axios.get(`https://rocky-temple-19031.herokuapp.com/prices/month-prices/` + this.props.symbol + '/' + e.target.value)
            .then(res => {
                const companyMonthData = res.data;
                this.setState({ companyMonthData });
            })
    }

    render() {

        return (
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select ref="monthSelect" onChange={this.monthChosen}>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">Septmeber</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
              </div>
                <table id="stockPort"
                    class="table is-centered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Low</th>
                        <th>High</th>
                        <th>Close</th>
                    </tr>
                            </thead>
                                        
                    {this.state.companyMonthData.map(function(obj,index){
                        return <tr>
                                    <td>{obj.date}</td>
                                    <td>{obj.open}</td>
                                    <td>{obj.high}</td>
                                    <td>{obj.close}</td>
                                                    
                                </tr>
                })}
                </table>
                                        
                              
                </div>
        )
    }

}
export default CompanyListView;
