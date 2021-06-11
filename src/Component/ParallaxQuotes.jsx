import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { Parallax, Background } from "react-parallax";
import pic1 from '../media/pic1.JPG'

const useStyles = makeStyles({
    container:{
        padding:"3em 0em",
        width:"100vw",
        background:"rgba(74, 74, 74,0.6)",
    },
    image:{
        width:"100%", 
        height: "110vh",
        backgroundAttachment: "fixed", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    quote:{
        fontSize:"2.4em",
        fontFamily: "'Kurale', serif",
        '@media only screen and (max-width : 1279px)': {
            fontSize:"2em",
        },
        margin:"2.5em 0em",
        lineHeight:"1.3em"
    }
})

const ParallaxQuotes = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Parallax strength={500}>
                
                    <Background className="custom-bg">
                    <Grid xs={12} container justify="center" className={classes.container}>
                        <img src={pic1} className={classes.image}/>
                        </Grid>
                    </Background>
               
                
                <Grid xs={12} container justify="center" className={classes.container}>
                    <Grid xs={11} sm={6} >
                        <Typography color="secondary" variant="h4" gutterBottom className={classes.quote}  data-aos="zoom-out" data-aos-duration={600} aos-delay={200}>
                            {props.quote}
                        </Typography>
                    </Grid>
                </Grid>
            </Parallax>
        </div>
    )
}

export default ParallaxQuotes
