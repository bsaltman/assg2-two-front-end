import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserListItem from './UserListItem.js';
//import UserDetails from '../containers/UserDetails.js';
import axios from 'axios'; 
class UserBrowser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUserId: 1,
            users: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect(key) {
        this.setState({ currentUserId: key});
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function (error) {
                alert('Error with api call ... error=' + error);
            });              
    }   

    render() {
        if (! this.state.users || this.state.users.length === 0) 
        { 
            return null;
        }
        else {
            
        let currentID = this.state.currentUserId;// eslint-disable-next-line
       {/*  let currentUser = this.state.users.find(function(user) {
            return user.id === currentID;
        }); */}
        return (
            <article className="section columns">
                <section className="column is-three-fifths is-offset-one-fifth">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link></li>
                    <li class="is-active"><Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Users</Link></li>

                  </ul>
                </nav>
                    <nav className="panel">
                        <h3 className="panel-heading">Users</h3>
            {   this.state.users.map( (user,ind) => {
                    let activeClass = "";
                    if (user.id === currentID) activeClass = "is-active";
                    return (
                            <UserListItem key={user.id} index={ind}
                            identifier={user.id} active={activeClass}
                            select={this.handleSelect}
                            >{user.name}</UserListItem>
                        )  
                    })
            }   
           </nav>
        </section>
       
       {/*  <section className="column is-two-thirds ">
            <UserDetails user={currentUser}/>
        </section> */}
        
            </article>
            
        );
    }
}//end render
}//end class

export default UserBrowser;