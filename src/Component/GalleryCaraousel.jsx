import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import eventNukkad from '../media/eventNukkad.JPG'
import eventStagePlay    from '../media/eventStage.png'
import eventMonoact from '../media/eventMonoact.JPG'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root:{
        width:"100%",
    },
    image:{
        width:"100%",
        height:"65vh"
    }
})

const GalleryCaraousel = () => {
    const classes = useStyles()
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const images = [
    {
        id:1,
        title:"Nukkad - Natak",
        caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis rerum nihil corrupti cupiditate hic?",
        img: eventNukkad
    },
    {
        id:3,
        title:"Stage Play",
        caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis rerum nihil corrupti cupiditate hic?",
        img: eventStagePlay
    },
    {
        id:1,
        title:"Monoact",
        caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis rerum nihil corrupti cupiditate hic?",
        img: eventMonoact
    }
]

  return (
        <Carousel className={classes.root} activeIndex={index} onSelect={handleSelect}>
            {
                images.map(image =>
                    <Carousel.Item className={classes.image}>
                        <img
                        className="d-block w-100"
                        src={image.img}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{image.title}</h3>
                            <p>{image.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
  );
}

export default GalleryCaraousel
