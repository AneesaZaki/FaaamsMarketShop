import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { list } from './api-product.js';
import Products from './Products';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Span } from "./../components/Typography";
import FlexBetween from "./../components/flex-between.jsx";
import Pagination from "@mui/material/Pagination";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3),
    },
    paper: {

        //min height 100% of the screen
    },
    title: {
        marginBottom: theme.spacing(2),
        textAlign: 'center'
    },
    noResults: {
        marginTop: theme.spacing(2),
        textAlign: 'center'
    },
    productGrid: {
        // Add spacing between grid items
        gap: theme.spacing(2),
        width: '100%',
    },
}));

function SearchResults() {
    const classes = useStyles();
    const [values, setValues] = useState({ results: [], searched: false });

    //product information
    const [products, setProducts] = useState([]);

    // current page state
    const [currentPage, setCurrentPage] = useState(1);

    // page count state
    const [pageCount, setPageCount] = useState(0);

    //8 products in per page
    const productsPerPage = 8;

    const location = useLocation();




    const useQuery = () => {
        return new URLSearchParams(location.search);
    };

    const query = useQuery();
    const searchQuery = query.get('search');
    const categoryQuery = query.get('category');

    useEffect(() => {
        const searchParams = {
            search: searchQuery || undefined,
            category: categoryQuery
        };

        if (searchQuery || categoryQuery) {
            list(searchParams).then((data) => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values, results: data, searched: true });
                    setProducts(data);
                    setPageCount(Math.ceil(data.length / productsPerPage));
                }
            });
        }
    }, [searchQuery, categoryQuery]);

    //------------------Pagination------------------



    // Handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // last product index in the current page. for example, last product index in page 1 is 8
    const indexOfLastShop = currentPage * productsPerPage
    //first product index in the current page. for example, first product index in page 2 is 16-8=8
    const indexOfFirstShop = indexOfLastShop - productsPerPage
    //only map the products in the current page, use products.slice(0,8) to return an array of products[0] to products[7]
    const currentProducts = products.slice(indexOfFirstShop, indexOfLastShop);


    //------------------Pagination------------------

    return (
        <div className={classes.root}>

            <Typography variant="h4" component="h2" className={classes.title}>
                {searchQuery ? `${values.results.length} Search Results for "${searchQuery}" in ${categoryQuery}`
                    : `${values.results.length} Search Results for "${categoryQuery}"`}
            </Typography>
            <Grid container spacing={4} justifyContent="center" className={classes.productGrid}>
                {/* Adjust the Grid item's size here */}
                <Grid item xs={12} sm={12} md={10} lg={8}>
                    {values.searched && values.results.length > 0 ? (
                        <Products products={currentProducts} searched={true} />
                    ) : values.searched ? (
                        <Typography variant="subtitle1" color="textSecondary" className={classes.noResults}>
                            No results found.
                        </Typography>
                    ) : (
                        <Typography variant="subtitle1" color="textSecondary" className={classes.noResults}>
                            Please enter a search query or choose a category.
                        </Typography>
                    )}
                </Grid>
                {values.results.length > 0 &&
                    <Grid item xs={12} sm={12} md={10} lg={8}>
                        <FlexBetween flexWrap="wrap" mt={4}>
                            <Span color="grey.600">Showing {indexOfFirstShop + 1} - {indexOfLastShop > products.length ? products.length : indexOfLastShop} of {products.length} Products</Span>
                            <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} variant="outlined" color="primary" />
                        </FlexBetween>
                    </Grid>
                }
            </Grid>

        </div>
    );
}

export default SearchResults;