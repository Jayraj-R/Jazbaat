import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles({
    root:{
        width:"100%",
    },
    cards:{
        position: "relative",
        '& div':{
            width: "300px",
            height: "400px",
            position: "relative", 
            overflow:"hidden",
            '&:hover':{
                '& img':{
                    filter: "grayscale(0%)",
                    transform: "scale(1.1)"
                },
                '& span':{
                    transform: "translateX(50%) perspective(400px) rotateX(0deg)"
                },
                '& li':{
                    transform: "perspective(800px) rotateY(0deg)",
                    '&:nth-child(1)':{
                        transitionDelay: ".2s"
                    },
                    '&:nth-child(2)':{
                        transitionDelay: ".5s"
                    },
                    '&:nth-child(3)':{
                        transitionDelay: ".8s"
                    },
                    '&:nth-child(4)':{
                        transitionDelay: "1.1s"
                    }
                }
            },
            '& img':{
                height: "100%",
                width: "100%",
                filter: "grayscale(100%)",
                transition: "2s", 
                '@media only screen and (max-device-width : 1279px)': { 
                    filter: "grayscale(0%)",
                    transform: "scale(1.1)"
                },
            },
            '& span':{
                background: "#FACA08 ",
                textAlign: "center",
                margin: "0",
                padding: "10px 0",
                position: "absolute",
                bottom: "0",
                width: "100%",
                left:"-50%",
                transform: "translateX(50%) perspective(400px) rotateX(90deg)",
                transformOrigin: "bottom",
                transition: "700ms ease-in-out",
                '@media only screen and (max-device-width : 1279px)': { 
                    transform: "translateX(50%) perspective(400px) rotateY(0deg)"
                },
            },
            '& ul':{
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                padding: 0,
                listStyle: "none",
                background: "rgba(255, 255, 255, 0)",
                '& li':{
                    background: "#4A4A4A",
                    height: "40px",
                    width: "40px",
                    textAlign: "center",
                    lineHeight: "40px",
                    transform: "perspective(800px) rotateY(90deg)",
                    transition: "0.5s",
                    transformOrigin: "left",
                    '@media only screen and (max-device-width : 1279px)': { 
                        transform: "perspective(800px) rotateY(0deg)",
                    },
                }
            }
        }
    },
    paper:{
        margin: "50px",
    }
});


const TeamCard = (props) => {
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
                    <Grid container xs={11} sm={6} justify="center" alignContent="center">
                        
                        <div className={classes.cards}>
                            <div className="imgBx4">
                                <img src={props.src} alt={props.title}/>
                                <span>
                                    <Typography variant="h5" style={{fontFamily: "'Playfair Display',sans serif", fontWeight:"500", letterSpacing:"0.1em"}}>
                                        {props.title}
                                    </Typography>
                                    <Typography variant="subtitle1" style={{fontFamily: "'Noto Sans JP', sans-serif", fontWeight:"300"}}>
                                        {props.name}
                                    </Typography>
                                </span>
                                <ul>
                                    <li><a href={props.fb}  target="_blank" rel="noreferrer"><FacebookIcon color="secondary"/></a></li>
                                    <li><a href={props.insta} target="_blank" rel="noreferrer"><InstagramIcon color="secondary"/></a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default TeamCard
