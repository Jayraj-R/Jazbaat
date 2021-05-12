import {
    Drawer,
    IconButton,
    Button,
    Grid
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import * as React from "react";
  import { useState } from "react";
  
  const useStyles = makeStyles({
      paper:{
        backgroundColor:"#605F5D"
      },
      list:{
        display:"flex",
        flexDirection:"column",
        width: 150,
        marginTop:40
      },
      links:{
        textDecoration: "none",
        color:"#FEF9EE"
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
        <Button color="secondary" ><span style={{ letterSpacing: 5, marginBottom:20}}><a href="#about" className={classes.links}>About</a></span></Button>
        <Button color="secondary"><span style={{ letterSpacing: 5, marginBottom:20}}><a href="#work" className={classes.links}>Work</a></span></Button>
        <Button color="secondary"><span style={{ letterSpacing: 5, marginBottom:20}}>Contact</span></Button>
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
            M
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
  