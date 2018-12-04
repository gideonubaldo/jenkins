import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withAuth } from '@okta/okta-react';
import Employee from '../employees/Employee';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;
      const mainContent = this.state.authenticated ? (
        <div>
          <Button color="primary" variant="contained" onClick={this.logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <p className="lead">
            Click Here to Log In
          </p>
          <Button color="primary" variant="contained"  onClick={this.login}>
            Login
          </Button>
        </div>
      );

      return (
        <div className="jumbotron">
          <Employee/>
        </div>
      );
    }
  }
);