const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

// Load environment variables
dotenv.config({path: './config/config.env'});

const app = express();

// Body parser
app.use(express.json());

// Logging middleware for development
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/', (req, res, next) => {
    res.send('Welcome');
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);