import { makeStyles, Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import EventCard from './EventCard';
import eventNukkad from '../media/eventNukkad.JPG'
import eventStagePlay    from '../media/eventStage.png'
import eventMonoact from '../media/eventMonoact.JPG'
import ParallaxHeader from './ParallaxHeader'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
    },[]);

    const events = [
        {
            id:1,
            title:"Nukkad Natak",
            caption: "Used to convey a profound message to through the rawest form of acting, Nukkad is a form of theatrical performance in an outdoor public spaces.",
            img: eventNukkad
        },
        {
            id:2,
            title:"Stage Play",
            caption: "A one-act play is a play that has only one act, as distinct from plays that occur over a span of several act.",
            img: eventStagePlay
        },
        {
            id:3,
            title:"Monoact",
            caption: "The monoact is a scene with only one person physically present who acts and reacts a monologues scene.",
            img: eventMonoact
        }
    ]

    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center" >
                <Grid container xs={12} sm={8} justify="center" className={classes.header} data-aos="fade-up" data-aos-duration={600} aos-delay={200}>
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
                                    id={event.id}
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
