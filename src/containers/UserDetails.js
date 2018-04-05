import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserDetailItem from './UserDetailItem.js'; 
class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { user: props.user };
        this.handleItemChange = this.handleItemChange.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        if (nextProps !== this.props){
            this.setState({user: nextProps.user});
        }
    }
    
    render() {
        return (
           // <div className="box">
                <form >
                    <h3 className="title is-5">User Details</h3>
                    <UserDetailItem place="Name (first last)" icon="fa-user" 
                        type="text" label="Name"  identifier="name"
                        currentValue={this.state.user.name} 
                        handleTextChange={this.handleItemChange} />
                    <UserDetailItem place="e.g. alexsmith@gmail.com"  
                        icon="fa-envelope" type="email" label="Email" 
                        identifier="email" currentValue={this.state.user.email} 
                        handleTextChange={this.handleItemChange} />
                    <UserDetailItem place="e.g. 403-222-3333" icon="fa-phone" 
                        type="phone" label="Phone" identifier="phone"
                        currentValue={this.state.user.phone} 
                        handleTextChange={this.handleItemChange} />
                </form>
                <hr/>
                <nav className="container">
                   <Link className="button is-info" 
                   to={"/user/" + this.state.user.id} key={this.state.user.id}> 
                        View Complete User Record
                   </Link> 
                </nav>
            </div>
        ); 
    }
    /*  Called when the user changes the content in a UserDetailItem control.
    */ 
    handleItemChange(value, identifier) {
        let newUser = this.state.user;
        newUser[identifier] = value;
        this.setState({user: newUser});
    }
} 

export default UserDetails; 