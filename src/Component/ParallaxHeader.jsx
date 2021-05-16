import React,{useEffect, useState} from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position:"relative",
    margin:"0em 0.5em"
  }
});

const ParallaxHeader = (props) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.screen.availWidth<1440){
      setIsMobile(!isMobile)
    }
},[window.screen.availWidth]);

  return (
    <Grid xs={12} className={classes.root}>
      {
        !isMobile ?
          (<Controller>
            <Scene
              indicators={true}
              reverse={true}
              duration={props.duration}
              offset={290}
            >
              <Tween
                staggerFrom={{ top:"0em" }}
                staggerTo={{ top:`${props.to}` }}
                ease= "Linear.easeNone"
              >
                <Typography  variant="h1" style={{ letterSpacing: 5, position:"relative"}}>
                  {props.title}
                </Typography>
              </Tween>
            </Scene>
          </Controller>)
          :
          (
            <Typography  variant="h1" style={{ letterSpacing: 5, position:"relative"}}>
                  {props.title}
                </Typography>
          )
      }
      
    </Grid>
  );
};
export default ParallaxHeader;
