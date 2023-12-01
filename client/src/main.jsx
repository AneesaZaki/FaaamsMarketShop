import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

hydrate(<App/>, document.getElementById('root'))
