import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import EventCard from './EventCard';

const useStyles = makeStyles({
    root:{
        background:"blue",
        padding:"5em 0em"
    }
});


const Events = () => {
    const classes = useStyles()
    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={10}justify="center" alignContent="center">
                <Typography variant="h2">
                    Events
                </Typography>
            </Grid>
            <Grid container xs={11} sm={8} className={classes.cards} justify="center" alignContent="center">
                <EventCard/>
                <EventCard/>
            </Grid>
        </Grid>
    )
}

export default Events
