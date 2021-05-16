import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root:{
        width:"100%",
    },
    cards:{
        margin: "50px",
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
                    transform: "translateX(50%) perspective(400px) rotateY(0deg)"
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
            },
            '& span':{
                background: "#C9305E",
                color: "#fff",
                textAlign: "center",
                margin: "0",
                padding: "10px 0",
                position: "absolute",
                bottom: "0",
                width: "100%",
                left:"-50%",
                transform: "translateX(50%) perspective(400px) rotateY(90deg)",
                transformOrigin: "right",
                transition: "700ms ease-in-out",
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
                    background: "#333",
                    height: "40px",
                    width: "40px",
                    textAlign: "center",
                    lineHeight: "40px",
                    transform: "perspective(800px) rotateY(90deg)",
                    transition: "0.5s",
                    transformOrigin: "left",
                }
            }
        }
    }
});


const TeamCard = (props) => {
    const classes = useStyles()

    return (
        <div>
            <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
                <Grid container xs={11} sm={6} justify="center" alignContent="center">
                    
                    <div className={classes.cards}>
                        <div className="imgBx4">
                            <img src="http://www.dumpaday.com/wp-content/uploads/2018/04/photos-23-2.jpg"/>
                            <span>{props.title}<br/>{props.name}</span>
                            <ul>
                                <li><a href="https://facebook.com">FB</a></li>
                                <li><a href="https://www.instagram.com">IG</a></li>
                                <li><a href="https://twitter.com">TW</a></li>
                                <li><a href="https://www.youtube.com">YT</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default TeamCard
