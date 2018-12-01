import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import Navbar from "./navbar/Navbar";
import HomePage from "./home/HomePage";
import WebPortal from "./webportal/WebPortal";
import Login from "./auth/Login";

const config = {
  issuer: "https://dev-500578.oktapreview.com/oauth2/default",
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: "0oahrdfs7sxBGFkES0h7"
};

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

  
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  render() {
    return (
      <Router>
        <Security
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
          onAuthRequired={this.onAuthRequired}
        >
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Route
            path="/(.+)"
            render={() => (
              <div>
                <Switch>
                  <Route
                    path="/login"
                    render={() => (
                      <Login baseUrl="https://dev-500578.oktapreview.com" />
                    )}
                  />
                  <Route
                    path="/implicit/callback"
                    component={ImplicitCallback}
                  />
                  <Route path="/portal" component={WebPortal} />
                </Switch>
              </div>
            )}
          />
        </Security>
      </Router>
    );
  }
}

export default App;
