import React,{useEffect, useState} from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position:"relative",
    margin:"0em 0.5em",
    color:"aliceblue"
  },
  title:{
    fontSize:"6em",
    textAlign:"center",
    fontFamily: "'Playfair Display',sans serif",
    fontWeight:"500",
    '@media only screen and (max-width : 1199px)': {
      left:"auto",
    },
    '@media only screen and (min-width : 1280px) and (max-width : 1439px)': {
      fontSize:"4em"
    },
  }
});

const ParallaxHeader = (props) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.screen.availWidth<1280){
      setIsMobile(!isMobile)
    }
},[]);

  return (
    <Grid xs={12} className={classes.root}>
      {
        !isMobile ?
          (<Controller>
            <Scene
              indicators={false}
              reverse={true}
              duration={props.duration}
              offset={290}
            >
              <Tween
                staggerFrom={{ top:"0em" }}
                staggerTo={{ top:`${props.to}` }}
                ease= "Linear.easeNone"
              >
                <Typography color="error"  variant="h2" className={classes.title} style={{ letterSpacing: 5, position:"relative"}}>
                  {props.title}
                </Typography>
              </Tween>
            </Scene>
          </Controller>)
          :
          (
            <Typography  variant="h2"  color="error"   className={classes.title} style={{ letterSpacing: 5, position:"relative"}}>
                  {props.title}
            </Typography>
          )
      }
      
    </Grid>
  );
};
export default ParallaxHeader;
