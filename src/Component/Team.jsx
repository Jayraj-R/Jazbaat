import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import TeamCard from './TeamCard';
import ParallaxHeader from './ParallaxHeader'
import Cordinator from '../media/Cordinator.jpg'
import CoCordinator from '../media/CoCordinator.jpeg'

const useStyles = makeStyles({
    root:{
        position:"relative",
        background: "#4a4a4a "
    },
    cards:{
        position:"relative",
        zIndex:2
    }
});


const Team = () => {
    const classes = useStyles()

    const members = [
        {
            id:1,
            title:"Cordinator",
            name: "Ratnesh Dubey",
            img:Cordinator,
            insta:"https://www.instagram.com/i_m_ratnesh/",
            fb:"https://www.facebook.com/ratnesh.dubey.900388"

        },
        {
            id:3,
            title:"Co-Cordinator",
            name: "Rahul Ojha",
            img:CoCordinator,
            insta:"https://www.instagram.com/rahulojha96/",
            fb:"https://www.facebook.com/profile.php?id=100037885392522"
        },
    ]

    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={11} sm={10} xs={12} className={classes.cards} justify="center" alignContent="center">
                {
                        members.map(member =>
                            <TeamCard
                                id={member.id}
                                title={member.title}
                                name={member.name}
                                src={member.img}
                                insta={member.insta}
                                fb={member.fb}
                            />
                        )
                }
            </Grid>
        </Grid>
    )
}

export default Team
