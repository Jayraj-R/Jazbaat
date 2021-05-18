import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
import Mail from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    root:{
        width:"100%",
        background:"#FACA08",
        padding:"5em"
    },
    icons:{
        marginTop:"2em",
        display:"flex",
        justifyContent:"space-around"
    },
    links:{
        textDecoration:"none",
        '&:hover':{
            transform :"scale(1.2)"
        }
    }
})

const Footer = () => {
    const classes=useStyles();
    return (
        <Grid xs={12} className={classes.root} container justify="center">
            <Grid  sm={8} lg={12} gutterBottom>
                <Typography variant="h4" style={{fontSize:"2.8em", fontFamily: "'Kurale', serif"}}>
                    <i>बाबूमोशाय...जिंदगी बड़ी होनी चाहिए, लंबी नहीं</i>
                </Typography>
            </Grid>
            <Grid xs={12} sm={6} lg={2} container justify="center" className={classes.icons}>
                <a href="https://www.facebook.com/Jazbaatiiitdmj" target="_blank" className={classes.links}>
                    <FacebookIcon color="primary" style={{ fontSize: 40 }}/>
                </a>
                <a  href="https://www.instagram.com/jazbaat_dc/" target="_blank" className={classes.links}>
                    <InstagramIcon color="primary" style={{ fontSize: 40 }}/>
                </a>
                <a  href="https://www.youtube.com/user/jazbaatiiitdmj" target="_blank" className={classes.links}>
                    <YouTubeIcon color="primary" style={{ fontSize: 40 }}/>
                </a>
                <a href="mailto:jazbaat@iiitdmj.ac.in" className={classes.links}>
                <Mail color="primary" style={{ fontSize: 40 }}/>

                </a>
            </Grid>
        </Grid>
    )
}

export default Footer
