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
                width:"18em",
                padding:"0em 2em",
            }
        },
        '@media only screen and (max-width : 480px)': {
            width:"18em",
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
    },
    content:{
        position:'relative',
        height:"30em",
        width:"45em",
        background:"rgba(74, 74, 74,0.4)",
        float:"right",
        color:"#fef9f0",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        padding:"0em 8em",
        '@media only screen and (max-width : 480px)': {
            width:"18em",
            height:"18em",
            padding:"0em 2em",
        },
        '@media only screen and (min-device-width: 768px) and (max-width : 1199px)': {
            width:"30%",
            padding:"0em 2em",
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

            <Grid container xs={12} className={classes.root} justify="center" alignContent="center" data-aos={props.id%2==0 ? `fade-right` : `fade-left`} data-aos-duration={600} aos-delay={200}>
                
                <Grid container xs={11} sm={8} className={classes.cards} justify="center" alignContent="center">
                    <Grid className={classes.root} xs={12} sm={10} container justify="center" alignContent="center">
                
                        <Paper elevation={4} className={classes.card}>
                            <section> 
                                <img className={classes.image} src={props.src} alt={props.title}/>
                                <section variant="h4" className={classes.title} gutterBottom>
                                    
                                        <div className={classes.content}  style={{transition: "width 0.9s ease-in-out,padding 0.9s ease-in-out",}}> 
                                      
                                            <Typography style={{fontFamily: "'Playfair Display',sans serif", fontWeight:"500"}} variant="h4" gutterBottom>
                                                {props.title}
                                            </Typography>
                                            
                                            <Typography style={{fontFamily: "'Noto Sans JP', sans-serif", fontWeight:"400"}} variant="subtitle1" className={classes.caption}>
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