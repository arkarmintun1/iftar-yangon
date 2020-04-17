const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const auth = require('./routes/auth');

// Load environment variables
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Logging middleware for development
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);