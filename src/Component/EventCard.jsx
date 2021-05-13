import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root:{
        margin:"2em 0em"
    },
    card:{
        overflow:"hidden",
        display:"flex",
        width:"40em",
        height:"25em",
        transition: "width 0.9s ease-in-out",
        "&:hover":{
            width:"75em",
        },
        "@media (max-width: 414px)": {
            flexDirection:"column"
        }
    },
    image:{
        height:"100%",
        width:"40em",
    },
    content:{
        height:"100%",
        width:"35em",
        background:"red",
        padding:"4em 2em"
    },
});


const EventCard = (props) => {
    const classes = useStyles()
    return (
        <>
        <Grid className={classes.root} xs={12} sm={10} container justify="center" alignContent="center">
            
            <Paper elevation={4} className={classes.card}>
                <span className={classes.image}> 
                    <img className={classes.image} src={props.src}/>
                </span>

                <div className={classes.content}> 
                    <Typography variant="h4" className={classes.title} gutterBottom>
                        {props.title}
                    </Typography>
                    
                    <Typography variant="subtitle1" className={classes.caption}>
                        {props.caption}
                    </Typography>  
                </div>
            </Paper>
        </Grid>
        
        </>
    )
}

export default EventCard
