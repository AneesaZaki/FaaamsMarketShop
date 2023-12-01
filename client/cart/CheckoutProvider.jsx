import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { StripeProvider } from 'react-stripe-elements'
import config from '../../config/config'
import Checkout from './Checkout'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  }
}))

export default function Cart() {

  return (
    <StripeProvider apiKey={config.stripe_test_api_key}>
      <Checkout />
    </StripeProvider>)

}
