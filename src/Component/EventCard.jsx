import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import React from 'react'
import eventNukkad from '../media/eventNukkad.JPG'

const useStyles = makeStyles({
    root:{
        margin:"2em 0em"
    },
    card:{
        overflow:"hidden",
        display:"flex",
        "@media (max-width: 414px)": {
            flexDirection:"row",
        }
        
    },
    image:{
        position:"relative",
        height:"100%",
        width:"100%",
    },
    content:{
         position:"relative",
        width:"100%",
        background:"red",
    },
});


const EventCard = () => {
    const classes = useStyles()
    return (
        <>
        <Grid className={classes.root} xs={12} sm={10} container justify="center" alignContent="center">
            
            <Paper elevation={4} className={classes.card}>
                
                <Grid xs={12} sm={8} className={classes.image}> 
                    <img className={classes.image} src={eventNukkad}/>
                </Grid>

                <Grid xs={12} sm={4} className={classes.content}> 
                    
                    <Typography variant="h4" className={classes.title}>
                        Nukkad - Natak
                    </Typography>
                    
                    <Typography variant="subtitle1" className={classes.caption}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, itaque!
                    </Typography>
                
                </Grid>
            </Paper>
        </Grid>
        
        </>
    )
}

export default EventCard
