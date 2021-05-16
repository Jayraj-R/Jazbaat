import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import GalleryCaraousel from './GalleryCaraousel';
import GalleryVideos from './GalleryVideos';
import ParallaxHeader from './ParallaxHeader'

const useStyles = makeStyles({
    root:{
        position:"relative",
        padding:"5em 0em"
    },
    header:{
        position:"absolute",
        height:"100%",
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
                        duration="1440"
                        to="24em" 
                    /> 
                </span>
            </Grid>

            <Grid container xs={8} className={classes.carousel} justify="center" alignContent="center" gutterBottom> 
                <GalleryCaraousel/>
            </Grid>

            <Grid container xs={9} className={classes.videos} justify="center" alignContent="center">
                <GalleryVideos/>
            </Grid>
        </Grid>
    )
}

export default Gallery
