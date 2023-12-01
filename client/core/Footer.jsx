import React from "react";
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Paragraph } from "../components/Typography"
import { makeStyles } from '@material-ui/core/styles';

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
export default Footer;