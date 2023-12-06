import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />)

//hydrate(<App/>, document.getElementById('root'))
