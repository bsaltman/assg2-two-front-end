import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(){
        super();
        this.state = {width:0, height:0, menuDrop: false};
        this.toggleMenu = this.toggleMenu.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
 
  //https://www.hawatel.com/blog/handle-window-resize-in-react/ finding viewport dimensions
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    
    toggleMenu() {
        const currentState = this.state.menuDrop;
        this.setState({ menuDrop: !currentState });
    };

    
    render(){
        return (
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
                to={ {pathname: "/home"}}>Home</Link>
                <Link className="navbar-item is-tab "
                to={ {pathname: "/Users"}}>Users</Link>
                <Link className="navbar-item is-tab "
                to={ {pathname: "/Stocks"}}>Stocks</Link>
            </div>
          </div>
        </nav>
         );
    }
    
}
export default NavBar;
//NEED to add the Javascript Toggle from https://bulma.io/documentation/components/navbar/
//