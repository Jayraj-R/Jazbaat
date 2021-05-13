import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import GalleryCaraousel from './GalleryCaraousel';
import ParallaxHeader from './ParallaxHeader'

const useStyles = makeStyles({
    root:{
        position:"relative",
        background:"orange",
        padding:"5em 0em"
    },
    header:{
        position:"absolute",
        height:"100%",
        background:"red",
        width:"auto",
        zIndex:1,
        left:0
    }
});


const Gallery = () => {
    const classes = useStyles()
    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={12} justify="left" className={classes.header}>
                <span>
                    <ParallaxHeader
                        title="Gallery"
                        duration="525"
                        to="9em" 
                    /> 
                </span>
            </Grid>

            <Grid container xs={8} className={classes.carousel} justify="center" alignContent="center">
                <GalleryCaraousel/>
            </Grid>
        </Grid>
    )
}

export default Gallery
