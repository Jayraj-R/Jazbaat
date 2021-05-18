import React,{useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { makeStyles } from '@material-ui/styles'
import pic1 from '../media/gallery/pic1.JPG'
import pic2 from '../media/gallery/pic2.jpg'
import pic3 from '../media/gallery/pic3.jpg'

const useStyles = makeStyles({
    root:{
        width:"100%",
    },
    container:{
        width:"100%",
        height:"100%"
    },
    image:{
        '@media only screen and (max-width : 480px)': {
            height:"18em",
        },
        '@media only screen and (min-device-width: 481px) and (max-width : 767px)': {
            height:"18em",
        },
    },
    
})

const GalleryCaraousel = () => {
    const classes = useStyles()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if(window.screen.availWidth<1440){
        setIsMobile(!isMobile)
        }
    },[window.screen.availWidth]);



  const images = [
    {
        img: pic1
    },
    {
        img: pic2
    },
    {
        img: pic3
    }
]

  return (
        <Carousel className={classes.root} activeIndex={index} onSelect={handleSelect}>
            {
                images.map(image =>
                    <Carousel.Item className={classes.container}>
                        <img
                            className={`d-block w-100 ${classes.image}`}
                            src={image.img}
                            alt="First slide"
                        />
                    </Carousel.Item>
                )
            }
        </Carousel>
  );
}

export default GalleryCaraousel
