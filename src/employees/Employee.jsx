import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
    padding: 15
  },
  paper: {
    padding: 30
  },
  divider: {
    width: "100%",
    marginTop: 10
  },
  saveButton: {
    backgroundColor: "primary",
    height: "47px",
    color: "#ffffff",
    width: "100%",
    minWidth: "30px",
    marginTop: 20
  },
  profileTitle: {
    fontFamily: "typeface-roboto"
  },
  salaryButton: {
    backgroundColor: "primary",
    height: "47px",
    color: "#ffffff",
    width: "100%",
    minWidth: "30px",
    marginTop: 10
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  Headings: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "typeface-roboto"
  },
  positiontextField: {
    flexBasis: "100%"
  },
  searchcontainer: {
    marginTop: 100,
    marginBottom: 100,
    padding: 15
  },
  searchButton: {
    searchButton: {
      backgroundColor: "primary",
      height: "47px",
      color: "#ffffff",
      width: "100%",
      minWidth: "30px",
      marginTop: 10
    }
  },
  searchButtonContainer: {
    flexWrap: "wrap",
    display: "flex"
  },
  label: {
    fontSize: 16,
    fontFamily: "typeface-roboto"
  }
};

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      stateProvince: "",
      email: "",
      country: "",
      phone: "",
      website: "",
      salary: "",
      position: ""
    };
  }

  _changePosition = e => {
    this.setState({
      position: e.target.value
    });
  };
  _handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const positions = [
      {
        value: "Accountant",
        label: "Accountant"
      },
      {
        value: "Janitor",
        label: "Janitor"
      },
      {
        value: "Manager",
        label: "Manager"
      },
      {
        value: "Lead",
        label: "Lead"
      },
      {
        value: "Intern",
        label: "Intern"
      },
      {
        value: "Supervisor",
        label: "Supervisor"
      }
    ];

    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        spacing={8}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Grid container>
            <Grid item>
              <Paper>
                <Grid
                  className={classes.searchcontainer}
                  spacing={8}
                  direction="column"
                >
                  <Grid item>
                    <Grid
                      container
                      className={classes.searchInput}
                      direction="row"
                    >
                      <Grid item xs={5}>
                        <Grid container>
                          <TextField
                            variant="outlined"
                            label="First Name"
                            fullWidth
                            style={{
                              paddingRight: 10
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={5}>
                        <Grid container>
                          <TextField
                            variant="outlined"
                            label="Last Name"
                            fullWidth
                            style={{
                              paddingRight: 10
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        className={classes.searchButtonContainer}
                      >
                        <Button
                          variant="contained"
                          className={classes.searchButton}
                          color="primary"
                        >
                          Search
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container className={classes.infocontainer} spacing={16}>
            {/* This 4 block is for the left part with employee
                profile picture and description */}
            <Grid item xs={4}>
              <Paper container className={classes.paper}>
                <Grid
                  container
                  justify="flex-start"
                  direction="column"
                  alignItems="center"
                >
                  <Avatar
                    alt="Profile Picture"
                    src="blank-profile.png"
                    className={classes.avatar}
                  />
                  <Typography className={classes.Headings}>
                    Georgi Facello{/* insert dynamic name here */}
                  </Typography>
                  <Typography className={classes.profileTitle}>
                    Head Cheer Leader{/* insert dynamic position here */}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
            {/* This 8 block is for the right part wth employee 
                information and settings */}
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Grid container>
                  <Typography className={classes.Headings}>
                    Personal Settings{/* insert dynamic name here */}
                  </Typography>
                  <Divider className={classes.divider} />
                  <Grid container>
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                       <Typography className={classes.label}>
                        First Name
                      </Typography>
                      <TextField
                        disabled
                        variant="outlined"
                        label="Georgi"
                        fullWidth
                        style={{
                          paddingRight: 10
                        }}
                      />
                    </Grid>
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                       <Typography className={classes.label}>
                       Last Name
                      </Typography>
                      <TextField
                        disabled
                        variant="outlined"
                        label="Facello"
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                      <Typography className={classes.label}>
                        Employee number
                      </Typography>
                      <TextField
                        disabled
                        variant="outlined"
                        label="10001"
                        fullWidth
                        style={{
                          paddingRight: 10
                        }}
                      />
                    </Grid>
                    <Grid
                      variant="outlined"
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                     <Typography className={classes.label}>
                        Birth Date
                      </Typography>
                      <TextField
                        disabled
                        variant="outlined"
                        label="1953-09-02"
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                     <Typography className={classes.label}>
                        Gender
                      </Typography>
                      <TextField
                        disabled
                        variant="outlined"
                        label="M"
                        fullWidth
                        style={{
                          paddingRight: 10
                        }}
                      />
                    </Grid>
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    > <Typography className={classes.label}>
                    Hired Date
                  </Typography>
                      <TextField
                        disabled
                        variant="outlined"
                        label="1986-06-26"
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  <Typography
                    className={classes.Headings}
                    style={{
                      marginTop: 20,
                      fontFamily: "typeface-roboto"
                    }}
                  >
                    Employee Settings
                  </Typography>
                  <Divider className={classes.divider} />
                  <Grid container direction="row">
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                      <TextField
                        variant="outlined"
                        label="Salary"
                        fullWidth
                        style={{
                          paddingRight: 10
                        }}
                      />
                    </Grid>
                    <Grid
                      container
                      xs={6}
                      style={{
                        paddingTop: 20
                      }}
                    >
                      <TextField
                        select
                        className={classes.positiontextField}
                        variant="outlined"
                        label="Position"
                        value={this.state.position}
                        onChange={this._handleChange("position")}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">:</InputAdornment>
                          )
                        }}
                      >
                        {positions.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>

                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.saveButton}
                    onChange
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.salaryButton}
                    onChange
                    component={Link}
                    to="/history"
                  >
                    Salary History
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Employee);
