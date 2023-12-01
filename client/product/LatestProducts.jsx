
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Products from './../product/Products'
import { listLatest } from './../product/api-product.js'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
    },
    card: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),

    },
    //I want the grid in the middle of the parent div
    grid: {
        margin: 'auto',
        width: '100%',
        padding: '0px 20px 20px 20px',
    },

    title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle,
        fontSize: '1.2em'
    },
    productTitle: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle,
        width: '100%',
        fontSize: '1.2em',
        fontWeight: 'bold',
    }
}))

export default function LatestProduct() {
    const classes = useStyles()
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        listLatest(signal).then((data) => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setProducts(data)
            }
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [])


    return (<div className={classes.root}>
        <Grid item xs={8} sm={8} className={classes.grid}>
            <Card>
                <Typography type="title" component="h2" className={classes.productTitle}>New Arrivals</Typography>
                <Products products={products} searched={false} />
            </Card>
        </Grid>
    </div>)
}