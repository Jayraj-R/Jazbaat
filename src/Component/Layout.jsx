import React from 'react'
import Navbar from './Navbar'
import { Grid, Typography } from '@material-ui/core'
import dramaticSociety from '../media/dramaticSociety.png'
import Events from './Events'
import Gallery from './Gallery'
import ParallaxQuotes from './ParallaxQuotes';

const Layout = () => {
    return (
        <Grid  container xs={12} className="root" justify="center" alignContent="center">

            {/* base image and navbar-sidebar */}
            <Grid xs={12}>
                <section className="main-image"></section>
                <span className="fade"></span>
            </Grid>
            <Navbar/>

            {/* intro text & book button */}
            <Grid container xs={12} className="intro-text" justify="center" alignContent="center">
                <Grid item xs={11}>
                    <Typography variant="h1" style={{color:"#FFC900"}}>
                        Jazbaat

                    </Typography>
                </Grid>
                
                <Grid container xs={12} sm={4} justify="center" alignContent="center">      
                    <img className="dramaticSociety" src={dramaticSociety} alt="The Dramatic Society"/>
                </Grid>
            </Grid>
            

            {/* diff event cards */}
            <Grid  container xs={12} className="events" justify="center" alignContent="center">
                <Events/>
            </Grid> 

            {/* Parallax image */}
            {/* <ParallaxQuotes/> */}

            {/* gallery */}
            <Grid  container xs={12} className="gallery" justify="center" alignContent="center">
                <Gallery/>
            </Grid>

            {/* parallex quote */}
            <Grid xs={12} className="parallax">
                <section className="main-image"></section>
                there
            </Grid>

            {/* quotes caraousal */}
            {/* team cards */}
            {/* contact banner */}
        </Grid>
    )
}

export default Layout
