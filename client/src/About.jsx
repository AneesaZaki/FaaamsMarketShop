
import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useStyles = makeStyles({
  carouselHero: {
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    '& img': {
      maxWidth: '100%',
      maxHeight: '500px',
      objectFit: 'contain',
      margin: '0 auto',
      display: 'block',
    },
  },
  heading: {
    color: 'maroon',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'underline',
    lineHeight: '1.5',
  },
  teamMembers: {
    textAlign: 'center',
  },
  missionSection: {
    textAlign: 'center',
    color: 'black',
  },
  boxedSection: {
    padding: '40px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    margin: '40px auto',
    maxWidth: '800px'
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
    autoplay: true,
  };
    // this is where the Bitmojis code is in the About me page 
  return (
        <>
          <h1 className={classes.heading}>About Us</h1> 
           
          <div className={classes.carouselHero}>
            <Slider {...settings}>
              <div className={classes.imageContainer}>
                <img src="https://hips.hearstapps.com/hmg-prod/images/model1-2b-1596789899.png?resize=980:*" alt="Image 1" />
              </div>
              <div className={classes.imageContainer}>
                <img src="https://i.pinimg.com/474x/75/db/c1/75dbc19c4a59d48d028faf6098860cfd.jpg" alt="Image 2" />
              </div>
              <div className={classes.imageContainer}>
                <img src="https://i.pinimg.com/originals/2a/4d/1a/2a4d1aaf4dfa694bd052de04776bc686.png" alt="Image 3" />
              </div>
              <div className={classes.imageContainer}>
                <img src="https://cf-st.sc-cdn.net/aps/snap_bitmoji/aHR0cHM6Ly9pbWFnZXMuYml0bW9qaS5jb20vM2QvYXZhdGFyLzM5ODEwMzM1MS0xNjA0NjYyNjBfOC1zNC12MS53ZWJw._FMpng" alt="Image 4" />
              </div>
              <div className={classes.imageContainer}>
                <img src="https://cf-st.sc-cdn.net/aps/snap_bitmoji/aHR0cHM6Ly9pbWFnZXMuYml0bW9qaS5jb20vM2QvYXZhdGFyLzIwMTcxNDE0Mi05OTE3NDA1NTA1Ml81LXM1LXYxLndlYnA._FMpng" alt="Image 5" />
              </div>
              <div className={classes.imageContainer}>
                <img src="https://fiverr-res.cloudinary.com/image/upload/c_limit,f_auto,q_auto,t_smartwm,w_500/v1/attachments/delivery/asset/88b45dea9a60f46ff4412010c3526447-1692242946/BCF13B5F-BA8D-4BF9-847C-A784EFDFF34A.png" alt="Image 6" />
              </div>
            </Slider>
          </div>
        </>
      );
    };

    //Add the team information 

const AboutUs = () => {
  const classes = useStyles();

  const teamMembers = [
    
        { name: 'Aneesa Zaki', role: 'Project Manager' },
        { name: 'Areebah Nadeem', role: 'Database Engineer' },
        { name: 'Maan Patel', role: 'Software Developer' },
        { name: 'Ayman Yasin', role: 'Ui/UX Designer' },
        { name: 'Farrah Riaz', role: 'Web Designer' },
        { name: 'Samra Mohamed', role: 'Software Developer' },
      ];

      // this is where the information within the boxes are for the About me page. Add more if needed 

  return (
    <div>
      <section>
        <CarouselHero />
      </section>
      <section className={classes.boxedSection}>
        <h2 className={classes.heading}>Our Team</h2>
        <p className={classes.teamMembers}>
          Meet the dedicated individuals who make up the Faaams team, working together to bring you innovative technology solutions.
        </p>
        <div className={classes.teamMembers}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <strong>{member.name}</strong> - {member.role}
            </div>
          ))}
        </div>
      </section>
      <section className={classes.boxedSection}>
        <div className={classes.missionSection}>
        <h2 className={classes.heading}>Our Mission</h2> <br />
          <p>
            At Faaams, our mission is to empower individuals and businesses through cutting-edge technology solutions that drive innovation and transform the digital landscape. We are committed to delivering exceptional service, fostering a culture of continuous learning, and maintaining the highest standards of integrity in all our interactions. Our goal is to be a catalyst for positive change in the Tech Industry, and we strive to create meaningful and lasting impact for our clients and the communities we serve. At the core of our values are collaboration, excellence, and a relentless pursuit of excellence. Join us on this exciting journey as we shape the future of technology together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
