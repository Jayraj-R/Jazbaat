import React from 'react'
import Navbar from './Navbar'
import { Grid } from '@material-ui/core';
import About from './About';
import Events from './Events'
import Gallery from './Gallery'
import ParallaxQuotes from './ParallaxQuotes';
import logo from '../media/logo.png'
import Team from './Team'
import Footer from './Footer'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Layout = () => {
    return (
        <Grid  container xs={12} className="root" justify="center" alignContent="center">

            {/* base image and navbar-sidebar */}
            <Grid xs={12} data-aos="fade-up" data-aos-duration={600} aos-delay={200}>
                <Grid container xs={12}><a name="start"/></Grid>
                <section className="bg-image"></section>
            </Grid>
            <Navbar/>

            {/* intro text & book button */}
            <Grid container xs={12} data-aos="zoom-out" data-aos-duration={600} aos-delay={600} className="intro-text" justify="center" alignContent="center">
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <img className="main-logo" src={logo} alt="Jazzbaat"/>
                </Grid>
                <Grid item xs={12}>
                    <About/>
                </Grid>
            </Grid>
            

            {/* diff event cards */}
            <Grid container xs={12} className="anchor"><a name="events"/></Grid>
            <Grid  container xs={12} className="events" justify="center" alignContent="center">
                <Events/>
            </Grid> 

            {/* Parallax quote */}
            <ParallaxQuotes
                quote="आ काट ले पर तू बन जा क़ैदी हो जा तू पिंजरे में बंद, ये शब्द है किसके कैसी भाषा कैसी मान ले मेरी बातें बस।"    
            />

            {/* gallery */}
            <Grid container xs={12} className="anchor"><a name="gallery"/></Grid>
            <Grid  container xs={12} className="gallery" justify="center" alignContent="center">
                <Gallery/>
            </Grid>

            {/* parallex image */}
            <ParallaxQuotes
                quote="मेरे दोस्त मर्दानगी मन की बात छुपाकर रोने में नहीं, मन की बात साझा कर के खुश होने में है।"
            />


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
