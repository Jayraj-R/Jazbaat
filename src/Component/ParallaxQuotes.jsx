import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { Parallax, Background } from "react-parallax";
import bgImage from '../media/main.png'

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
    }
})

const ParallaxQuotes = () => {
    const classes = useStyles()
    return (
        <div>
            <Parallax strength={500}>
                
                    <Background className="custom-bg">
                    <Grid xs={12} container justify="center" className={classes.container}>
                        <img src={bgImage} className={classes.image}/>
                        </Grid>
                    </Background>
               
                
                <Grid xs={12} container justify="center" className={classes.container}>
                    <Grid xs={11} sm={6} >
                        <Typography color="secondary" variant="h4" gutterBottom  style={{fontFamily: "'Noto Sans JP', sans-serif", fontWeight:"300"}}>
                            <i>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis, quos molestias similique quibusdam officiis possimus! Error provident tempore quidem!
                            </i>
                        </Typography>
                        <Typography variant="h6" color="secondary" style={{fontFamily: "'Noto Sans JP', sans-serif", fontWeight:"400"}}>
                            - Hello There
                        </Typography>
                    </Grid>
                </Grid>
            </Parallax>
        </div>
    )
}

export default ParallaxQuotes
