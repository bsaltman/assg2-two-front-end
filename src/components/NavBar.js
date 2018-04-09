import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, menuDrop: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.logout = this.logout.bind(this);
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

  logout() {
    window.location.pathname = '/';
  }


  render() {
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
            to={ {pathname:"/portfolio"}}>Portfolio</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/companies"}}>Companies</Link>
         <Link className="navbar-item is-tab "
            to={ {pathname:"/stockVisualizer"}}>StockVisualizer</Link>
            </div>
          </div>
          <button className = 'button is-info' onClick={this.logout}>Log out</button>
        </nav>
    );
  }

}
export default NavBar;
//NEED to add the Javascript Toggle from https://bulma.io/documentation/components/navbar/
//
