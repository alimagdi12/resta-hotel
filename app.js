const path = require('path');

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/mainRoutes.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(mainRoutes);

// app.use('/',(req, res,next)=>{
//     res.render('index')

// })

app.listen(3000);
