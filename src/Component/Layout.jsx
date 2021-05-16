import React from 'react'
import Navbar from './Navbar'
import { Grid, Typography } from '@material-ui/core'
import Events from './Events'
import Gallery from './Gallery'
import ParallaxQuotes from './ParallaxQuotes';
import logo from '../media/logo.png'
import Team from './Team'
import Footer from './Footer'

const Layout = () => {
    return (
        <Grid  container xs={12} className="root" justify="center" alignContent="center">

            {/* base image and navbar-sidebar */}
            <Grid xs={12}>
                <Grid container xs={12}><a name="start"/></Grid>
                <section className="bg-image"></section>
                <span className="fade"></span>
            </Grid>
            <Navbar/>

            {/* intro text & book button */}
            <Grid container xs={12} className="intro-text" justify="center" alignContent="center">
                <Grid item xs={10} sm={8} md={6} lg={5}>
                    <img className="main-logo" src={logo}/>
                </Grid>
            </Grid>
            

            {/* diff event cards */}
            <Grid container xs={12} className="anchor"><a name="events"/></Grid>
            <Grid  container xs={12} className="events" justify="center" alignContent="center">
                <Events/>
            </Grid> 

            {/* Parallax quote */}
            <ParallaxQuotes/>

            {/* gallery */}
            <Grid container xs={12} className="anchor"><a name="gallery"/></Grid>
            <Grid  container xs={12} className="gallery" justify="center" alignContent="center">
                <Gallery/>
            </Grid>

            {/* parallex image */}
            <Grid xs={12} className="parallax">
                <section className="bg-image"></section>
            </Grid>


            {/* team cards */}
            <Grid container xs={12} className="anchor"><a name="teams"/></Grid>
            <Grid  container xs={12} className="gallery" justify="center" alignContent="center">
                <Team/>
            </Grid>


            {/* contact banner */}
            <Grid container xs={12} className="anchor"><a name="contact"/></Grid>
            <Grid  container xs={12} className="gallery" justify="center" alignContent="center">
                <Footer/>
            </Grid>


            {/* quotes caraousal */}
            
            
        </Grid>
    )
}

export default Layout
