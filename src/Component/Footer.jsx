import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React from 'react'

const useStyles = makeStyles({
    root:{
        width:"100%",
        background:"orange",
        padding:"5em"
    }
})

const Footer = () => {
    const classes=useStyles();
    return (
        <Grid xs={12} className={classes.root}>
            <Typography variant="h2">
                Hello
            </Typography>
        </Grid>
    )
}

export default Footer
