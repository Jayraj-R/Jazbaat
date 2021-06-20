import { makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import TeamCard from './TeamCard';
import Cordinator from '../media/Cordinator.jpg'
import CoCordinator from '../media/CoCordinator.jpeg'
import fic1 from '../media/fic1.jpg'
import fic2 from '../media/fic2.png'

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
            title:"Faculty Incharge",
            name: "Harpreet Singh",
            img:fic1,
            mail:"hps.dme@iiitdmj.ac.in",
            linkedin:"https://www.linkedin.com/in/dr-harpreet-singh-01ba7180/"

        },
        {
            id:2,
            title:"Faculty Incharge",
            name: "Kusum Kumari Bharti",
            img:fic2,
            mail:"kusum@iiitdmj.ac.in",
            linkedin:"https://www.linkedin.com/in/kusum-kumari-bharti-10598627/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAWpTRUB7dzPmEVc29zzT6Vm6OvvdHDd_3I"
        },
        {
            id:3,
            title:"Cordinator",
            name: "Ratnesh Dubey",
            img:Cordinator,
            mail:"jazbaat@iiitdmj.ac.in",
            linkedin:"https://www.linkedin.com/in/ratnesh-dubey/"

        },
        {
            id:4,
            title:"Co-Cordinator",
            name: "Rahul Ojha",
            img:CoCordinator,
            mail:"jazbaat@iiitdmj.ac.in",
            linkedin:"https://www.linkedin.com/in/rahul-ojha-335453193/"
        },
    ]

    return (
        <Grid container xs={10} className={classes.root} justify="center" alignContent="center">
            <Grid container xs={11} sm={10} className={classes.cards} justify="center" alignContent="center">
                {
                        members.map(member =>
                            <TeamCard
                                id={member.id}
                                title={member.title}
                                name={member.name}
                                src={member.img}
                                mail={member.mail}
                                linkedin={member.linkedin}
                            />
                        )
                }
            </Grid>
        </Grid>
    )
}

export default Team
