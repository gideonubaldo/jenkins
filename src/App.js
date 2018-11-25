import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Navbar from './navbar/Navbar';
import HomePage from './home/HomePage';
import Login from './auth/Login';
import WebPortal from './webportal/WebPortal'

const config = {
  issuer: 'https://dev-500578.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oahrdfs7sxBGFkES0h7'
}


class App extends Component {
  onAuthRequired = ({history}) => {
    history.push('/login');
  }
  render() {
    return (
      <div>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
                  onAuthRequired={this.onAuthRequired}
        >
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
          <Route 
            path="/(.+)"
            render={() => (
              <div>
                <Switch>
                  <Route path="/login" render={() => <Login baseUrl='https://dev-500578.oktapreview.com' />}/>
                  <Route path='/implicit/callback' component={ImplicitCallback}/>
                  <Route path='/portal' component={WebPortal}/>
                </Switch>
              </div>
            )}/>  
        </Security>

      </div>

    );
  }
}

export default App;
