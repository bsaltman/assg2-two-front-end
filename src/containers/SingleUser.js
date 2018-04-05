import React, { Component } from 'react';
import axios from 'axios';
import PortfolioPage from '../components/PortfolioPage.js';
import SingleUserDetails from '../components/SingleUserDetails.js';
import userStockPortfolio from '../userStockPortfolio.json';
import stocks from '../stocks.json';
//import { Link } from 'react-router-dom';

class SingleUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: [],
            showAddress: true,
            showCompany: true,
            tab : true,
            nameToggle: 1,
            amountToggle: 1,
            symbolToggle:1
        }
        
        
        this.toggleAddress = this.toggleAddress.bind(this);
        this.toggleCompany = this.toggleCompany.bind(this);
        this.detailsTab = this.detailsTab.bind(this);
        this.portfolioTab = this.portfolioTab.bind(this);
        this.nameSort = this.nameSort.bind(this);
        this.amountSort = this.amountSort.bind(this);
        this.symbolSort = this.symbolSort.bind(this);
    }




    symbolSort(){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        var symbol = this.state.symbolToggle
        let symbolOrderedStocks = this.state.currentUserStocks.sort(function(a, b) {
            var nameA = a.symbol.toUpperCase(); // ignore upper and lowercase
            var nameB = b.symbol.toUpperCase(); // ignore upper and lowercase
            
            
            if (nameA < nameB) {
                return symbol * -1;
                
            }
            if (nameA > nameB) {
                    return symbol;
            }
        
          // names must be equal
          return 0;
        });
    
        
        this.setState(() => {
             return {currentUserStocks: symbolOrderedStocks,
                    symbolToggle: (this.state.symbolToggle * -1)
             };
        });
}
    
    nameSort(){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        var name = this.state.nameToggle
        let nameOrderedStocks = this.state.currentUserStocks.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            
            
            if (nameA < nameB) {
                return name * -1;
                
            }
            if (nameA > nameB) {
                    return name;
            }
        
          // names must be equal
          return 0;
        });
    
        
        this.setState(() => {
             return {currentUserStocks: nameOrderedStocks,
                    nameToggle: (this.state.nameToggle * -1)
             };
        });
        
        
    }

        amountSort(){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        var amount = this.state.amountToggle
        let amountOrderedStocks = this.state.currentUserStocks.sort(function(a, b) {
            var nameA = a.amount // ignore upper and lowercase
            var nameB = b.amount // ignore upper and lowercase
            if (nameA < nameB) {
                return amount * -1;
            }
            if (nameA > nameB) {
                return amount;
            }
        
          // names must be equal
          return 0;
        });
        this.setState(() => {
             return {currentUserStocks: amountOrderedStocks,
                    amountToggle: (this.state.amountToggle * -1)
             };
        });
    }
    
    toggleAddress(){
        this.setState((prevState, props) => {
             return {showAddress: !prevState.showAddress};
        });

    }
    
    toggleCompany(){
        this.setState((prevState, props) => {
             return {showCompany: !prevState.showCompany};
        });

    }
    
    detailsTab(){
        this.setState(() => {
             return {tab: true};
        });

    }
    
    portfolioTab(){
        this.setState(() => {
             return {tab: false};
        });

    }
    
    componentDidMount() {
        let userId = this.props.match.params.id;
        axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(response => {
                this.setState({userInfo: response.data});
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });              
            var currentUserStocks = [];
            
            for(var i = 0; i< userStockPortfolio.length; i++){
            // eslint-disable-next-line
            if (userStockPortfolio[i].userId == this.props.match.params.id){
                currentUserStocks.push(userStockPortfolio[i])
            }
            var combinedArray = [];
            for(var x = 0; x < currentUserStocks.length; x++){
                for (var ii = 0; ii < stocks.length; ii++){
                    if(stocks[ii].symbol === currentUserStocks[x].symbol){
                        combinedArray.push({symbol : stocks[ii].symbol, name: stocks[ii].name, amount: currentUserStocks[x].amount, id:ii})
                    }
                }
            }
            
            this.setState({
                currentUserStocks : combinedArray
            })
        }
    } 
    

    
    render() {
        if (! this.state.userInfo || this.state.userInfo.length === 0) 
        { 
            //Web service issue
            return null;
        }
        if (this.state.tab){
        return (
        <SingleUserDetails id={this.props.match.params.id} detailsTab={this.detailsTab} portfolioTab={this.portfolioTab} 
                    userInfo={this.state.userInfo} showCompany={this.state.showCompany}
                    showAddress={this.state.showAddress} toggleCompany={this.toggleCompany}
                    toggleAddress={this.toggleAddress}
        />
        ); 
    }   
 else{
    return(
        <PortfolioPage detailsTab={this.detailsTab} portfolioTab={this.portfolioTab} 
                        userInfo={this.state.userInfo} currentUserStocks={this.state.currentUserStocks}
                        symbolSort={this.symbolSort} nameSort={this.nameSort} amountSort={this.amountSort}/>
        )}
}}
export default SingleUser;