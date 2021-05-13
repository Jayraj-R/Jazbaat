import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import EventCard from './EventCard';
import eventNukkad from '../media/eventNukkad.JPG'
import eventStagePlay    from '../media/eventStage.png'
import eventMonoact from '../media/eventMonoact.JPG'
import ParallaxHeader from './ParallaxHeader'
const useStyles = makeStyles({
    root:{
        position:"relative",
        background:"yellow",
        padding:"5em 0em",
    },
    header:{
        position:"absolute",
        height:"100%",
        background:"red",
        width:"auto",
        zIndex:1,
        left:0
    },
    cards:{
        position:"relative",
        zIndex:2
    }
});


const Events = () => {
    const classes = useStyles()

    const events = [
        {
            id:1,
            title:"Nukkad - Natak",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis rerum nihil corrupti cupiditate hic?",
            img: eventNukkad
        },
        {
            id:3,
            title:"Stage Play",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis rerum nihil corrupti cupiditate hic?",
            img: eventStagePlay
        },
        {
            id:1,
            title:"Monoact",
            caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis rerum nihil corrupti cupiditate hic?",
            img: eventMonoact
        }
    ]

    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={12} justify="left" className={classes.header}>
                <span>
                    <ParallaxHeader
                        title="About"
                        duration="1425"
                        to="24em"
                    /> 
                </span>
            </Grid>
            <Grid container xs={11} sm={8} className={classes.cards} justify="center" alignContent="center">
                {
                        events.map(event =>
                            <EventCard
                                title={event.title}
                                caption={event.caption}
                                src={event.img}
                            />
                        )
                }
            </Grid>
        </Grid>
    )
}

export default Events
