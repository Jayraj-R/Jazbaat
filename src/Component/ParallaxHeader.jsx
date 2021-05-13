import React from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  about: {
    position:"relative",
    backgroundColor: "#FEF9EE",
    margin:"0em 0.5em"
  }
});

const About = (props) => {
  const classes = useStyles();

  return (
    <Grid xs={12} className={classes.about}>
      <Controller>
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
              <Typography  variant="h2" style={{ letterSpacing: 5, position:"relative", background:"yellow"}}>
                {props.title}
              </Typography>
            </Tween>
          </Scene>
        </Controller>
    </Grid>
  );
};
export default About;
