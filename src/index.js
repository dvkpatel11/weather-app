import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
