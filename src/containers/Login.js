//based on template https://github.com/dansup/bulma-templates/blob/master/templates/login.html
import React, { Component } from 'react';
//import HeaderApp from '../components/HeaderApp.js';
import axios from 'axios';
//import md5 from 'md5';
const md5 = window.md5;
class Login extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  state = {
    userInfo: [],
    wrong: false
  }

  submitForm(e) {
    axios.get('https://rocky-temple-19031.herokuapp.com/users/' + document.getElementById("emailInput").value)
      .then(res => {
        const userInfo = res.data;

        this.setState({ userInfo });
        let password = document.getElementById("passwordInput").value;
        password = md5(password + userInfo[0].salt);
        if (password === userInfo[0].password) {
          window.location.pathname = '/home/' + userInfo[0].id;
        }
        else {
          alert("false");
        }
      });



  }

  //should be using post, but was having issues with express post, the post verision is written on the node server but commented out not sure what the issues is
  render() {
    return (
      <body>
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">

              <div>
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="email" id="emailInput" placeholder="Your Email" autofocus=""></input>
                  </div>
                </div>
  
                <div className="field">
                  <div className="control">
                    <input className="input is-large" id="passwordInput" type="password" placeholder="Your Password"></input>
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                  </label>
                </div>
                <button className="button hero is-primary is-large is-fullwidth" onClick={this.submitForm}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <script async type="text/javascript" src="../js/bulma.js"></script>
  </body>
    )
  }
}
export default Login;
