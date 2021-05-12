import React from "react";
import Carousel from "react-elastic-carousel";
import { makeStyles, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles({
  root:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh"
  },
  
  carouselWrapper: {
    width: "100%"
  },
  item :{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    width: "100%",
    backgroundColor: "#683bb7",
    color: "#fff",
    fontSize: "4em",
  }
});
const breakPoints = [{ width: 250, itemsToShow: 1 }];

const  GalleryCarousel = () => {
  const classes = useStyles();

  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={classes.root}>
      <div className={classes.carouselWrapper}>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div className={classes.item} key={item}>
              {item}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default GalleryCarousel