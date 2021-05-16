import { Grid, makeStyles } from '@material-ui/core'
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import React from 'react'

const useStyles = makeStyles({
    root:{
        position: "relative",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gridGap: "0",
        margin: "0em 2em",
        padding: "5em 0em 0em 0em",
        '& section':{
            position: "relative",
            width: "84%",
            height: "12em",
            backgroundColor: "aliceblue",
            margin: "2em 3em",
            padding: "2em 0em",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 2px 10px rgba(131, 131, 131, 0.438)",
            transition: "0.2s ease-in-out",
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
                boxShadow: "0 2px 10px rgba(131, 131, 131, 0.438)",
                '& img':{
                    width: "100%",
                    height: "12em",
                    alignSelf: "center",
                    borderRadius: "10px"
                },
                '& p':{
                    position:"relative",
                    top:"-100%",
                    padding:"4em 0em",
                    textAlign:"center",
                    opacity:0,
                    '&:hover':{
                        color:"grey"
                    }
                }
            },
            '& div':{
                position: "relative",
                textAlign: "center",
                visibility: "hidden",
                opacity: "0",
                transition: "0.2s ease-in-out",
            }
        }
    },
    
});


const GalleryVideos = () => {
    const classes = useStyles()

    const videos = [
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        },
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        },
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        },
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        },
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        },
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        },
        {
            img:"http://www.mandysam.com/img/random.jpg",
            title:"Lorem",
            detail:"lorem ipsum dolor"
        }
    ]
    return (
        <Grid  container xs={12} justify="center" alignContent="center">
            
            <div id="box2" className={classes.root}>
                {
                    videos.map(video=>{
                        return(
                            <section>
                                <span>
                                    <img src={video.img} />
                                    <p><PlayCircleOutlineRoundedIcon style={{ fontSize: "5em" }}/></p>
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
