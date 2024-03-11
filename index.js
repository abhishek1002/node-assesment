const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const revenueRoute = require('./routes/revenueRoute');
const streamRebalanceRoute = require('./routes/streamRebalancerRoute');
const dotenv = require('dotenv');

//Env configuration
const NODE_ENV = process.env.NODE_ENV || 'dev';
const envFileName= `${NODE_ENV}.env`
dotenv.config({path: envFileName});
const PORT = process.env.PORT || 3000;

//Routes
app.use(bodyParser.json());
app.use('/revenue', revenueRoute);
app.use('/stream', streamRebalanceRoute);


//Start the server
app.listen(PORT, ()=> console.log(`Node JS Assesment App started and listening at port ${PORT}`));