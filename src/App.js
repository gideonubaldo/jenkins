import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import Navbar from "./navbar/Navbar";
import HomePage from "./home/HomePage";
import HistoryPage from "./employees/HistoryPage";
import WebPortal from "./webportal/WebPortal";
import Login from "./auth/Login";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import NewsPage from "./news/News";

const config = {
  issuer: "https://dev-500578.oktapreview.com/oauth2/default",
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: "0oahrdfs7sxBGFkES0h7"
};

class App extends Component {
  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: '',
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {

  //   const employee = {
  //     emp_no: '10002',
  //     // birth_date: '1953-09-02',
  //     // first_name: 'Georgi',
  //     // last_name: 'Facello',
  //     // gender: 'M',
  //     // hire_date: '1986-06-26',
  //     // salary: 10000,
  //     // from_date: '2018-6-22',
  //     // to_date: '2019-1-1'
  //   }

  //   const url = new URL('http://localhost:3000/api/employee')
  //   url.search = new URLSearchParams(employee)
  //   const response = await fetch(url);
  //   const body = await response.json();
  //   console.log(body)
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  // callApi = async () => {

  //   const id = {
  //     emp_no: '10001',
  //   }

  //   const url = new URL('http://localhost:3000/api/employee')
  //   url.search = new URLSearchParams(id)
  //   const response = await fetch(url);
  //   const body = await response.json();
  //   console.log(body);
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Security
            issuer={config.issuer}
            client_id={config.client_id}
            redirect_uri={config.redirect_uri}
            onAuthRequired={this.onAuthRequired}
          >
            <Navbar />

            <Switch>
              <Route
                exact
                path="/twitter"
                component={() => (window.location = "http://twitter.com")}
              />
              <Route
                exact
                path="/github"
                component={() => (window.location = "http://github.com")}
              />
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
                    <Route
                      path="/github"
                      component={() =>
                        (window.location = "https://github.com/login")
                      }
                    />
                    <Route path="/news" component={NewsPage} />
                    <Route
                      exact
                      path="/history/:id(\d+)"
                      render={props => {
                        const id = props.match.params.id;
                        return <HistoryPage id={id} />;
                      }}
                    />
                    <Route
                      exact
                      path="/:id(\d+)"
                      render={props => {
                        const id = props.match.params.id;
                        return <HomePage id={id} />;
                      }}
                    />
                  </Switch>
                </div>
              )}
            />
          </Security>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
