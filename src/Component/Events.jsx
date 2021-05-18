import { makeStyles, Typography, Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import EventCard from './EventCard';
import eventNukkad from '../media/eventNukkad.JPG'
import eventStagePlay    from '../media/eventStage.png'
import eventMonoact from '../media/eventMonoact.JPG'
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
        textAlign:"center",
        '@media only screen and (max-width : 1199px)': {
            left:"auto",
        },
    },
    cards:{
        marginTop:"4em",
        position:"relative",
        zIndex:2,
        '@media only screen and (max-width : 1199px)': {
            marginTop:"6.5em",
        },
    }
});


const Events = () => {
    const classes = useStyles()
    const [is13, setIs13] = useState(false)

    useEffect(() => {
      if(window.screen.availWidth<1440){
        setIs13(!is13)
      }
    },[window.screen.availWidth]);

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
            <Grid container xs={12} sm={8} justify="center" className={classes.header}>
                <span>
                    <ParallaxHeader
                        title="Events"
                        duration="1750"
                        to={!is13 ? '18em' : '27em'}
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
