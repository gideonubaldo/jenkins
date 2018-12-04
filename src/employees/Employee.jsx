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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  root: {
    flexGrow: 1,
    padding: "15px"
  },
  paper: {
    padding: 30
  },
  divider: {
    width: "100%",
    marginTop: "10px"
  },
  button: {
    marginTop: 10
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  Headings: {
    fontWeight: "bold",
    fontSize: "20px"
  }
};

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      addressline1: "",
      addressline2: "",
      city: "",
      stateProvince: "",
      email: "",
      country: "",
      phone: "",
      website: "",
      salary: "",
      position: "Accountant"
    };
  }

  _changePosition = e => {
      this.setState({
          position: e.target.value
      })
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
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
              <Typography
                variant="typeface-roboto"
                className={classes.Headings}
              >
                John Doe{/* insert dynamic name here */}
              </Typography>
              <Typography
                variant="typeface-roboto"
                className={classes.profileTitle}
              >
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
              <Typography
                variant="typeface-roboto"
                className={classes.Headings}
              >
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
                  <TextField
                    label="First Name"
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
                  <TextField label="Last Name" fullWidth />
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
                  <TextField
                    label="Address Line 1"
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
                  <TextField label="Address Line 2" fullWidth />
                </Grid>
              </Grid>

              <Grid container>
                <Grid
                  container
                  xs={4}
                  style={{
                    paddingTop: 20
                  }}
                >
                  <TextField
                    label="City"
                    fullWidth
                    style={{
                      paddingRight: 10
                    }}
                  />
                </Grid>
                <Grid
                  container
                  xs={4}
                  style={{
                    paddingTop: 20
                  }}
                >
                  <TextField
                    label="State/Province"
                    fullWidth
                    style={{
                      paddingRight: 10
                    }}
                  />
                </Grid>

                <Grid
                  container
                  xs={4}
                  style={{
                    paddingTop: 20
                  }}
                >
                  <TextField label="Zipcode" fullWidth />
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
                  <TextField
                    label="E-mail"
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
                  <TextField label="Country" fullWidth />
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
                  <TextField
                    label="Phone"
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
                  <TextField label="Website" fullWidth />
                </Grid>
              </Grid>

              <Typography
                variant="typeface-roboto"
                className={classes.Headings}
                style={{
                  marginTop: 20
                }}
              >
                Employee Settings
              </Typography>
              <Divider className={classes.divider} />
              <Grid container direction="column">
                <Grid
                  container
                  xs={6}
                  style={{
                    paddingTop: 20
                  }}
                >
                  <TextField
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
                    paddingTop: 30
                  }}
                >
                  <FormControl>
                    <Select
                      value={this.state.position}
                      name="position"
                      fullWidth
                    >
                      <MenuItem value={"Accountant"}>Accountant</MenuItem>
                      <MenuItem value={"Manager"}>Manager</MenuItem>
                      <MenuItem value={"Tech-Lead"}>Tech-Lead</MenuItem>
                      <MenuItem value={"President"}>President</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="inherit"
                className={classes.button}
                onChange
              >
                Save
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(Employee);
