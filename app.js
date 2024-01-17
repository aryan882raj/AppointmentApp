const path = require('path');
var cors = require('cors')
const express = require('express')


const IndexRoutes = require('./routes/index')

const sequelize = require('./util/database');
// const sequelize = require('./models/User');

const app = express()
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use(IndexRoutes);

sequelize
.sync()
.then(result =>{
    // console.log(result)
    app.listen(8000);
})
.catch(err => console.log(err));