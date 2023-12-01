import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Link } from 'react-router-dom';
import { H1, H2, H5, H6, Span } from "../components/Typography";
import AddToCart from "../cart/AddToCart";
import FlexBox from "../components/flex-box.jsx";
import { makeStyles } from '@material-ui/core/styles';
import { add } from "lodash";


const useStyles = makeStyles(theme => ({
  hyperlink: {
    textDecoration: 'none',
    fontSize: '3rem',
    color: theme.palette.text.primary || 'black',
  },

  addToCart: {
    marginLeft: '90px'
  }
}));


const ProductCard = ({ product }) => {
  const { _id, price, name, category, created, description, quantity, shop } = product;
  const classes = useStyles();

  function currency(price, fraction = 2) {
    const formatCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fraction
    }).format(price);
    return formatCurrency;
  }

  return (
    <Box width="100%">
      <Grid container spacing={2} justifyContent='center'> {/* Reduced spacing here */}
        <Grid item md={6} xs={12} alignItems="center" >
          <FlexBox justifyContent="center" mb={2}> {/* Reduced margin-bottom here */}
            <img alt={name} height='400' src={'/api/product/image/' + product._id}></img> {/* Removed fixed height and width */}
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={1}>{name}</H1>
          <FlexBox alignItems="center" gap={1} mb={1}>
            Rated:
            <Rating color="warn" value={5} readOnly />
            <H6 lineHeight="1">(32)</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb={1}>
            Category:&nbsp;  <Span color="grey.600">{category}</Span>
          </FlexBox>

          <FlexBox alignItems="center" mb={1}>
            Launch date:&nbsp;  <Span color="grey.600"> {new Date(created).toDateString()}</Span>
          </FlexBox>

          <FlexBox alignItems="center" mb={1}>
            Description:&nbsp; <Span color="grey.600">{description}</Span>
          </FlexBox>

          <Box pt={1} mb={3}>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {currency(price)}
              <Span className={classes.addToCart} ><AddToCart item={product} /></Span>
            </H2>
            {quantity > 0 ? <Box color="inherit">{quantity} Stock Available</Box> : <Box color="inherit">Out of Stock</Box>}
          </Box>

          <FlexBox alignItems="center" gap={1} mb={2}>
            Sold By:
            <Link to={"/shops/" + shop._id} className={classes.hyperlink} >
              <H5 className={classes.hyperlink}>{shop.name}</H5>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
