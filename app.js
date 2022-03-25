const express = require('express');

const AppError = require('./utils/appError');
const productApi = require('./routes/productApi');

const app = express();

// Body parser - reading data from the body into req.body + limited to 10KB
app.use(express.json({
    limit: '10kb',
}));

// ROUTES
app.use('/product', productApi);

//Error function for any error.
app.all('*', (req, res, next) => {
next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));

});

module.exports = app;