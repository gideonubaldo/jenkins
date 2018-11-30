import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core/styles";


const styles = ({
    root: {
        flexGrow: 1,
        margin: "12px",
      },
    paper: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30
    },
    divider: {
        width: "95%",
        marginTop: "10px",
    },
    button: {
        marginTop: 10,
    }
});

class Employee extends Component {
  
  render() {
      const { classes } = this.props
    return (
        <Grid container  className={classes.root} spacing={8}>
            {/* This 4 block is for the left part with employee
                profile picture and description */}
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    Profile Section
                </Paper>
            </Grid>
            {/* This 8 block is for the right part wth employee 
                information and settings */}
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    Employee Information and Settings
                    Personal Settings
                    <Divider className={classes.divider}/>
                    Social Settings
                    <Divider className={classes.divider}/>
                    <Button variant="contained" color="inherit" className={classes.button}>Save</Button>

                </Paper>
            </Grid>
        </Grid>
    )
  }
} export default withStyles(styles)(Employee)
