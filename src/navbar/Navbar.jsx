import AppBar from "@material-ui/core/AppBar";
import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { withAuth } from "@okta/okta-react";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};


export default withStyles(styles)(
  withAuth(
    class NavBar extends Component {
      state = { authenticated: null , openMenu: null};

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
        this.props.auth.login("/");
      };

      logout = async () => {
        this.props.auth.logout("/");
      };
      
      handleClick = event => {
        this.setState({ openMenu: event.currentTarget });
      }
    
      handleClose = () => {
        this.setState({ openMenu: null });
      };

      render() {
        if (this.state.authenticated === null) return null;
        const logInOut = this.state.authenticated ? (
          <div>
            <Button color="primary" variant="contained" onClick={this.logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button color="primary" variant="contained" onClick={this.login}>
              Login
            </Button>
          </div>
        );
        const { openMenu } = this.state;
        const { classes } = this.props;
        return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  openMenu={openMenu}
                  open={Boolean(openMenu)}
                  onClose={this.handleClose}
                >
                  <MenuItem><a href="twitter">Twitter</a></MenuItem>
                  <MenuItem onClick={this.handleClose}><a href="twitter.com">Twitter</a></MenuItem>
                  <MenuItem onClick={this.handleClose}><a href="twitter.com">Twitter</a></MenuItem>
                </Menu>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  Tabs
                </Typography>
                <Button href="/" color="inherit">
                  Home
                </Button>
                {logInOut}
              </Toolbar>
            </AppBar>
          </div>
        );
      }
    }
  )
);
