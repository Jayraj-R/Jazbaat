import { makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import TeamCard from './TeamCard';
import ParallaxHeader from './ParallaxHeader'

const useStyles = makeStyles({
    root:{
        position:"relative",
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
            name: "ABC",
        },
        {
            id:3,
            title:"Co-Cordinator",
            name: "XYZ",
        },
    ]

    return (
        <Grid container xs={12} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={11} sm={8} className={classes.cards} justify="center" alignContent="center">
                {
                        members.map(member =>
                            <TeamCard
                                title={member.title}
                                name={member.name}
                            />
                        )
                }
            </Grid>
        </Grid>
    )
}

export default Team
