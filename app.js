const express = require('express');

const app =  express();

app.use('/',(req, res, next) => {
    console.log('im always here !!');    
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('im here again !!!!');    
    res.send('<h1>im add product</h1>');
});

app.use('/',(req, res, next) => {
    console.log('im here again !!!!');    
    res.send('<h1>Hi from express</h1>');
});


app.listen(3001);
