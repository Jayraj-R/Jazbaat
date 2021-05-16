import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root:{
        margin:"0em 0em",
    },
    card:{
        display:"flex",
        width:"45em",
        height:"30em",
        margin:"2em 0em",
        "&:hover":{
            '& div':{
                width:"14em",
            }
        },
        '@media only screen and (max-width : 480px)': {
            width:"18em",
            height:"18em"
        },
        '@media only screen and (min-device-width: 481px) and (max-width : 767px)': {
            width:"22em",
            height:"18em"
        },
        
    },
    image:{
        position:"relative",
        height:"100%",
        width:"45em",
        '@media only screen and (max-width : 480px)': {
            width:"18em",
            height:"18em"
        },
        '@media only screen and (min-device-width: 481px) and (max-width : 767px)': {
            width:"22em",
            height:"18em"
        },
    },
    content:{
        position:'relative',
        height:"30em",
        width:"45em",
        background:"rgba(200,20,200,0.5)",
        float:"right",
        color:"yellow",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"0em 2em",
        '@media only screen and (max-width : 480px)': {
            width:"18em",
            height:"18em",
        },
        '@media only screen and (min-device-width: 481px) and (max-width : 767px)': {
            width:"22em",
            height:"18em",
        },
        '@media only screen and (min-device-width: 768px) and (max-width : 1199px)': {
            width:"30%",
        },
    },
    title:{
        position:"relative",
        top:"-100%",
    }
});


const EventCard = (props) => {
    const classes = useStyles()
    return (
        <div>

            <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
                
                <Grid container xs={11} sm={8} className={classes.cards} justify="center" alignContent="center">
                    <Grid className={classes.root} xs={12} sm={10} container justify="center" alignContent="center">
                
                        <Paper elevation={4} className={classes.card}>
                            <section> 
                                <img className={classes.image} src={props.src}/>
                                <section variant="h4" className={classes.title} gutterBottom>
                                    
                                        <div className={classes.content}  style={{transition: "width 0.9s ease-in-out,padding 0.9s ease-in-out",}}> 
                                      
                                            <Typography variant="h4" gutterBottom>
                                                {props.title}
                                            </Typography>
                                            
                                            <Typography variant="subtitle1" className={classes.caption}>
                                                {props.caption}
                                            </Typography>  
                                      
                                        </div>
                                    
                                </section>
                            </section>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>           
        </div>
    )
}

export default EventCard