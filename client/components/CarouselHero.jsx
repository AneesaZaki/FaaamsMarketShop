import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    carouselHero: {
        textAlign: 'center', // Center align everything inside the carousel
    },
    imageContainer: {
        // Keep the container at full width
        width: '100%',

        '& img': {
            maxWidth: '100%',
            maxHeight: '500px',
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block',
        }
    },

    Text: {
        color: 'black', 
        textAlign:'center'
    },

});

const CarouselHero = () => {
    const classes = useStyles();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

  

    return (
        <>
         <h1 className={classes.Text}>Welcome to Faaams Page</h1>
        
        <div className={classes.carouselHero}>
        
            <Slider {...settings}>
          
                <div className={classes.imageContainer}>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/c200-lamborghini-sian-rds-final-150-1594215316.jpg?crop=0.75xw:1xh;center,top&resize=1200:*" alt="Image 2" />
                </div>
                <div className={classes.imageContainer}>
                    <img src="https://blog.way.com/wp-content/uploads/2023/05/Ferrari-lease.jpg" alt="Image 2" />
                </div>
                <div className={classes.imageContainer}>
                    <img src="https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/qk0zv5w7abyztbrwn1gp" alt="Image 3" />
                </div>
            </Slider>
        </div>
        </>
    );
};

export default CarouselHero;