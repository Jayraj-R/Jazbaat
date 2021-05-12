import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import GalleryCarousel from './GalleryCarousel';

const useStyles = makeStyles({
    root:{
        background:"orange"
    }
});


const Gallery = () => {
    const classes = useStyles()
    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid xs={12}>
                <Typography variant="h2">
                    Gallery
                </Typography>
            </Grid>

            <Grid container xs={10} className={classes.carousel} justify="center" alignContent="center">
                <GalleryCarousel/>
            </Grid>
        </Grid>
    )
}

export default Gallery
