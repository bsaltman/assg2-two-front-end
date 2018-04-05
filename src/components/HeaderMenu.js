import React from 'react';
import { Link } from 'react-router-dom';
const HeaderMenu = function (props) {
 return (
    <nav className="navbar has-shadow nav-drop-down">
        <div className="navbar-tabs">
            <Link className="navbar-item is-tab "
                to={ {pathname: "/home"}}>Home</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/users"}}>Users</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/companies"}}>Companies</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/portfolio"}}>Portfolio</Link>
     </div>
     </nav>
 );
}

export default HeaderMenu;