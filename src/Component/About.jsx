import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        background:"#4A4A4A",
        position:"absolute",
        bottom:"-58%",
    },
    header:{
        fontSize:"6em",
        textAlign:"center",
        fontFamily: "'Playfair Display',sans serif",
        fontWeight:"500",
    },
    content:{
        fontFamily: "'Noto Sans JP', sans-serif",
        fontWeight:"300"
    }
})

const About = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid className={classes.root} xs={12} container  justify="center" alignContent="center"  data-aos="fade-up" data-aos-duration={600} aos-delay={800}>
                <Grid xs={10} sm={9}>
                    <Typography color="error" variant="h4" className={classes.header}>
                        About
                    </Typography>
                    <Typography color="secondary" variant="h6" className={classes.content}>
                        The biggest cultural club of the institute which provides a platform to the students to explore all the areas of dramatics like stage plays, street plays, mono-acts and mimes. Apart from acting we also work on areas like scripting, music, instruments etc. which is an integral part of drama. We have something to offer to everybody and this is the reason our family keeps growing every year and we attain new heights.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
