import { Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { Parallax, Background } from "react-parallax";

const useStyles = makeStyles({
    container:{
        padding:"3em 0em"
    }
})

const ParallaxQuotes = () => {
    const classes = useStyles()
    return (
        <div>
            <Parallax strength={500}>
                <Background className="custom-bg">
                    <section style={{width:"100vw"}} className="main-image"></section>
                </Background>
                <Grid xs={12} container justify="center" className={classes.container}>
                    <Grid xs={11} sm={6}>
                        <Typography variant="h4" gutterBottom>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam debitis, quos molestias similique quibusdam officiis possimus! Error provident tempore quidem!
                        </Typography>
                        <Typography variant="h6">
                            - Hello There
                        </Typography>
                    </Grid>
                </Grid>
            </Parallax>
        </div>
    )
}

export default ParallaxQuotes
