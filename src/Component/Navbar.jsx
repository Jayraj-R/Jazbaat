import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Hidden,
  Grid
} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/core/styles'
import { makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import '../App.css';

const useStyles = makeStyles({
    navbar:{
        borderBottom: "3px solid #ffe600"
    },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navbarButton:{
      padding:"1em",
      lineHeight:"2em",
  },
  button:{
    '&:hover':{
      '& hr':{
        transform: 'scale(1)',
        transformOrigin:"left"
      }
    }
  },
  underline:{
    position:"relative",
    top:-10,
    marginBottom:-10,
    color:"#FEF9EE",
    transform:'scaleX(0)',
    transformOrigin:"right",
    transition:"transform 250ms ease-in"
  },
  links:{
    textDecoration: "none",
    color:"#FEF9EE"
  },
  logo: {
    fontSize:"3em"
  }
});

const Navbar = () => {
  const classes = useStyles();
    
  return (
    <ThemeProvider>
        
        <AppBar position="fixed">
        <Toolbar className={classes.navbar}>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <span className={classes.logo}>JAZBAAT</span>
            <Hidden smDown>
                <Grid className={classes.navbarButton} justify="flex-end">
                    <Button className={classes.button} color="secondary">
                      <span style={{ letterSpacing: 5}}>
                        <a href="#about" className={classes.links}>About</a>
                        <hr className={classes.underline}/>
                      </span>
                    </Button>
                    <Button className={classes.button} color="secondary">
                      <span style={{ letterSpacing: 5}}>
                      <a href="#work" className={classes.links}>Work</a>
                        <hr className={classes.underline}/>
                      </span>
                    </Button>
                    <Button className={classes.button} color="secondary">
                      <span style={{ letterSpacing: 5}}>
                        Contact
                        <hr className={classes.underline}/>
                      </span>
                    </Button>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Sidebar />
            </Hidden>
            </Container>
        </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
