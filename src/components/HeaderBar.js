import React from 'react';

class HeaderBar extends React.Component {
    constructor(){
        super()
        this.state = {
            menuDrop: false
        }
        this.menuDropDown = this.menuDropDown.bind(this);
    }
    
    
    menuDropDown(prev){
        alert(this.state.menuDrop)
         this.setState((prevState) => ({
          menuDrop: !prevState.menuDrop
        }));
    }
    
    render(){
        return (
            <nav className="navbar is-primary">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <span className="icon">
                            <i className="fab fa-lg fa-react"></i>
                        
                        </span>
                    </a>
                    <a className="navbar-item">
                        <h1 className="title">Assignment One</h1>
                    </a>
                    <button onClick={this.menuDropDown} className="button is-info menu-drop-down-button">Menu</button>
                    if();
                </div>
             </nav>
         );
    }
    
}
export default HeaderBar;






