const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const crud = require('./routes/crud');

app.set('views','./view');
app.use(express.static('public'))
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/crud',crud);

const port = process.env.PORT || 9090;
app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
});

module.exports = app;