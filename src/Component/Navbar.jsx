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
import text from '../media/text.png'
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
    top:"-1em",
    marginBottom:-10,
    background:"#FEF9EE",
    transform:'scaleX(0)',
    transformOrigin:"right",
    transition:"transform 250ms ease-in"
  },
  links:{
    textDecoration: "none",
    color:"#FEF9EE"
  },
  logo: {
    height:"4em",
    '@media only screen and (max-width : 767px)': {
      height:"2.5em",
      marginBottom:"0.5em"
    },
    '@media only screen and (max-width : 964px)': {
      height:"3em"
    }
  },
  text:{
    fontFamily: "'Noto Sans JP', sans-serif",
    fontWeight:"400",
    letterSpacing:"0.35em"
  }
});

const Navbar = () => {
  const classes = useStyles();
    
  return (
    <ThemeProvider>
        
        <AppBar position="fixed">
        <Toolbar className={classes.navbar}>
            <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
              <a href="#start" className={classes.links}><img  className={classes.logo} src={text}/></a>
            <Hidden smDown>
                <Grid className={classes.navbarButton} justify="flex-end">
                  <a href="#events" className={classes.links}>
                    <Button className={classes.button} color="secondary">
                      <span className={classes.text}>
                        Events
                        <hr className={classes.underline} style={{}}/>
                      </span>
                    </Button>
                  </a>
                  <a href="#gallery" className={classes.links}>
                    <Button className={classes.button} color="secondary">
                      <span className={classes.text}>
                        Gallery
                        <hr className={classes.underline}/>
                      </span>
                    </Button>
                  </a>
                  <a href="#teams" className={classes.links}>
                    <Button className={classes.button} color="secondary">
                      <span className={classes.text}>
                        Team
                        <hr className={classes.underline}/>
                      </span>
                    </Button>
                  </a>
                  <a href="#contact" className={classes.links}>
                    <Button className={classes.button} color="secondary">
                      <span className={classes.text}>
                        Contact
                        <hr className={classes.underline}/>
                      </span>
                    </Button>
                  </a>
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
