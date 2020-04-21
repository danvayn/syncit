const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/../client/dist'));
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function checkNonAPI(req,res,next){
  if(req.path.substr(0,4) !== '/api'){
    res.redirect('/');
  } else {
    next();
  }
}

app.all('*', checkNonAPI);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});