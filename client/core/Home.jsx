
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Link, Typography } from '@material-ui/core';
import TechHub from './../assets/images/TechHub.png';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 1000,
    margin: 'auto',
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: 'red', // Set the color to maroon
    fontFamily: 'Times New Roman', // Set the font family to Times New Roman,
  },
  media: {
    maxHeight: 700,
    width: '100%',
    borderRadius: '8px',
  },
  footer: {
    padding: theme.spacing(0, 0),
    backgroundColor: 'black',
    color: 'white',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
    height: '200px',
  },
  intro: {
    maxWidth: 400,
  },
  logo: {
    height: 40,
    marginRight: theme.spacing(2),
    borderRadius: '8px',
  },
  footerContainer: {
    maxWidth: 1400,
    justifyContent: 'space-between',
    display: 'flex',
  },
  footerBoxedSection: {
    padding: '10px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    margin: '1px',
    maxWidth: '500px',
    textAlign: 'center',
    padding: theme.spacing(0, 0),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Box component={Container} pt={{ sm: 4, xs: 4 }} pb={{ sm: 1, xs: 1 }} color="white" overflow="hidden" className={classes.footerContainer}>
        {/* Logo and Copyright Section */}
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <div className={classes.intro}>
            <Link to="/">
              <img src=".././assets/images/faaams.jpg" alt="logo" className={classes.logo} />
            </Link>
            <Typography color="white">
              &copy; Copyright 2023 Faaams
            </Typography>
          </div>
        </Grid>

        {/* Contact Us Section */}
        <Grid item lg={6} md={6} sm={6} xs={12} className={classes.footerBoxedSection}>
          <Typography variant="h6" className={classes.title}>
            Contact Us
          </Typography>
          <Typography>
            Email: FaaamSupport@Faaams.com <br />
            Address: 800 N Glebe Rd Arlington VA 22203 USA <br />
            Phone Number: (703)-947-2000 <br />
          </Typography>
        </Grid> 

        {/* Add more BoxedSections as needed */}
      </Box>
    </Box>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {/* Image Section */}
        <Grid item xs={12} lg={6}>
          <div className={classes.card}>
            <img src={TechHub} alt="image" className={classes.media} />
          </div>
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} lg={6}>
          <Box component={Container} mt={5} mb={5}>
            <Typography variant="h2" className={classes.title}>
              Welcome to Faaams, Your Premier Destination For All Things Technology
            </Typography>
            <Typography style={{ fontFamily: 'Times New Roman' }}>
              At Faaams, we are dedicated to meeting and exceeding your every technological need. Whether you're a tech enthusiast, a business looking to upgrade, or someone seeking the latest innovations, we've got you covered. Our commitment to excellence, cutting-edge products, and top-notch service sets us apart in the ever-evolving world of technology. Explore our tech hub and embark on a journey where innovation meets satisfaction. Faaams - Transforming Your Tech Experience!
              {/* Added more paragraphs */}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Used the Footer component */}
      <Footer />
    </>
  );
};

export default Home;
