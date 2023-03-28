const bodyParser = require('body-parser');
const express = require('express')
const app = express()

const userroute = require('./routes/db.routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', userroute)

app.listen(3000, () => {
    console.log('Running');
})


