import {
  Drawer,
  IconButton,
  Button,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    paper:{
      backgroundColor:"#605F5D",
      textAlign:"center"
    },
    list:{
      display:"flex",
      flexDirection:"column",
      width: "100%",
      marginTop:"2em",
    },
    links:{
      textDecoration: "none",
      color:"#FEF9EE"
    },
    underline:{
      position:"relative",
      top:"-0.8em",
      background:"#FEF9EE",
    },
    text:{
      fontFamily: "'Noto Sans JP', sans-serif",
      fontWeight:"400",
      letterSpacing:"0.35em"
    }
});

const Sidebar = () => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <Grid container className={classes.list}  >
        <a href="#events" className={classes.links}>
            <Button color="secondary" >
              <span className={classes.text}>
                Events
                <hr className={classes.underline}/>
              </span>
            </Button>
          </a>
          <a href="#gallery" className={classes.links}>
            <Button color="secondary">
              <span className={classes.text}>
                Gallery
                <hr className={classes.underline}/>
              </span>
            </Button>
          </a>
          <a href="#teams" className={classes.links}>
            <Button color="secondary">
              <span className={classes.text}>
                Team
                <hr className={classes.underline}/>
              </span>
            </Button>
          </a>
          <a href="#contact" className={classes.links}>
            <Button color="secondary">
              <span className={classes.text}>
                Contact
                <hr className={classes.underline}/>
              </span>
            </Button>
          </a>
        
      </Grid>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
          <MenuIcon/>
      </IconButton>

      <Drawer
        classes={{ paper: classes.paper }}
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </>
  );
};

export default Sidebar;
