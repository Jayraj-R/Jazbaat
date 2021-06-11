import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import classroom from '../media/thumbs/classroomThumb.png'
import adMad from '../media/thumbs/admadThumb.png'
import darKhauff from '../media/thumbs/darKhauffThumb.png'
import jannatkijung from '../media/thumbs/jannatkijungThumb.png'
import mahamedia from '../media/thumbs/mahamediaThumb.png'
import mime from '../media/thumbs/mimeThumb.png'
import oneact from '../media/thumbs/oneactThumb.png'

const useStyles = makeStyles({
    root:{
        position: "relative",
        width: "100%",
        display: "flex",
        flexWrap:"wrap",
        justifyContent:"center",
        margin: "0em 2em",
        paddingTop: "2em",
        '& section':{
            position: "relative",
            width: "18.8em",
            height: "12em",
            backgroundColor: "#fef9f0",
            color:"#4A4A4A",
            margin: "2em 1em",
            padding: "2em 0em",
            display: "flex",
            flexDirection: "column",
            transition: "0.2s ease-in-out",
            '@media only screen and (max-device-width : 1279px)': { 
                height: "18em",
            },
            "&:hover" :{
                height: "18em",
                '& div':{
                    visibility: "visible",
                    opacity: "1",
                    marginTop: "-2em",
                    transitionDelay: "0.2s",
                },
                '& p':{
                    opacity:"1"
                }
            },
            '& span':{
                position: "relative",
                width: "260px",
                height: "12em",
                top: "-60px",
                left: "20px",
                zIndex: "1",
                borderRadius: "10px",
                '& img':{
                    width: "100%",
                    height: "12em",
                    alignSelf: "center",
                    borderRadius: "10px"
                },
                '& p':{
                    position:"relative",
                    borderRadius: "10px",
                    top:"-100%",
                    padding:"4em 0em",
                    height: "12em",
                    textAlign:"center",
                    opacity:0,
                    '@media only screen and (max-device-width : 1279px)': { 
                        opacity:"1"
                    },
                    '&:hover':{
                        color:"#FACA08",
                        background:"rgba(74, 74, 74,0.4)"
                    }
                }
            },
            '& div':{
                position: "relative",
                textAlign: "center",
                visibility: "hidden",
                opacity: "0",
                margin:"0em 1em",
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight:"400",
                transition: "0.2s ease-in-out",
                '@media only screen and (max-device-width : 1279px)': { 
                    visibility: "visible",
                    opacity: "1",
                    marginTop: "-2em",
                    transitionDelay: "0.2s",
                },
            }
        }
    },
    links:{
        color:"#4A4A4A",
        '&:hover':{
            color:"#fef9f0"
        }
    }
    
});


const GalleryVideos = () => {
    const classes = useStyles()

    const videos = [
        {
            id:1,
            img:classroom,
            title:"Classroom",
            detail:"",
            src:"https://www.youtube.com/watch?v=akDSYR8UQC0&t=1177s"
        },
        {
            id:2,
            img:adMad,
            title:"Gangajal Deo",
            detail:"",
            src:"https://www.youtube.com/watch?v=eatkduXz9Bg&t=152s"
        },
        {
            id:3,
            img:darKhauff,
            title:"Darr, Khauf, Bandish",
            detail:"",
            src:"https://www.youtube.com/watch?v=tyDeOtDz7Do"
        },
        {
            id:4,
            img:mime ,
            title:"Mime",
            detail:"",
            src:"https://www.youtube.com/watch?v=-JLk_D56-6U&t=70s"
        },
        {
            id:5,
            img:mahamedia,
            title:"Mahamedia",
            detail:"",
            src:"https://www.youtube.com/watch?v=lOQ8sHZfUSE"
        },
        {
            id:6,
            img:oneact,
            title:"28 seconds",
            detail:"",
            src:"https://www.youtube.com/watch?v=-YEujt7VKIw&t=1362s"
        },
        {
            id:7,
            img: jannatkijung,
            title:"Jannat ki Jung",
            detail:"",
            src:"https://www.youtube.com/watch?v=7sQyzqJqOFo&t=424s"
        }
    ]
    return (
        <Grid  container xs={12} justify="center" alignContent="center">
            
            <div id="box2" className={classes.root}>
                {
                    videos.map(video=>{
                        return(
                            <section  data-aos="fade-up" data-aos-duration={300} data-aos-once={true}>
                                <span>
                                    <img src={video.img} alt={video.title}/>
                                    <a href={video.src} target="_blank" rel="noreferrer" className={classes.links}>
                                        <p>
                                            <PlayCircleOutlineRoundedIcon style={{ fontSize: "5em" }}/>
                                        </p>
                                    </a>
                                </span>
                                <div >
                                    <h2>{video.title}</h2><p>{video.detail}</p>
                                </div>
                            </section>
                        )
                    })
                }
                
            </div>
        </Grid>
    )
}

export default GalleryVideos
