import { makeStyles, Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import GalleryCaraousel from './GalleryCaraousel';
import GalleryVideos from './GalleryVideos';
import ParallaxHeader from './ParallaxHeader'

const useStyles = makeStyles({
    root:{
        position:"relative",
        padding:"5em 0em",
        background: "#4a4a4a "
    },
    header:{
        position:"absolute",
        height:"100%",
        width:"auto",
        zIndex:1,
        left:0,
        textAlign:"center",'@media only screen and (max-width : 1199px)': {
            left:"auto",
        },
    },
    carousel:{
        position:"relative",
        zIndex:2,
        margin:"5em 0em 4em 0em",
        '@media only screen and (max-width : 1199px)': {
            marginTop:"7.5em",
        },
    },
    videos:{
        position:"relative",
        zIndex:2,
    }
});


const Gallery = () => {
    const classes = useStyles()
    const [is13, setIs13] = useState(false)

    useEffect(() => {
      if(window.screen.availWidth<1440){
        setIs13(!is13)
      }
    },[]);

    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={12} justify="left" className={classes.header}  data-aos="fade-up" data-aos-duration={600} aos-delay={200}>
                <span>
                    <ParallaxHeader
                        title="Gallery"
                        duration="600"
                        to={!is13 ? '6em' : '9em'}
                    /> 
                </span>
            </Grid>

                <Grid container xs={10} sm={8} lg={6} className={classes.carousel}  data-aos="zoom-out" data-aos-duration={600} aos-delay={200} justify="center" alignContent="center" gutterBottom> 
                    <GalleryCaraousel/>
                </Grid>

                <Grid container xs={12}  sm={11} xl={9} className={classes.videos} justify="center" alignContent="center">
                    <GalleryVideos/>
                </Grid>
        </Grid>
    )
}

export default Gallery
