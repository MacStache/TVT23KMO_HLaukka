var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Expressin ja dotenvin confausta
var app = express();
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT;
const jwt = require('jsonwebtoken');

//luodaan yhteydet tietokantaan
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');

var accountRouter = require('./routes/account');
var checkingsAccRouter = require('./routes/checkingAcc');
var creditAccRouter = require('./routes/creditAcc');
var savingsAccRouter = require('./routes/savingsAcc');

var cardRouter = require('./routes/card');
var debitCardRouter = require('./routes/debitCard');
var creditCardRouter = require('./routes/creditCard');
var combinationCardRouter = require('./routes/combinationCard');

var transactionRouter = require('./routes/transaction');
var transferRouter = require('./routes/transfer');
var withdrawRouter = require('./routes/withdraw');
var inquiryRouter = require('./routes/inquiry');

//listataan kaikki tarvittavat modelit tietokannasta tehtäviä hakuja ja muokkauksia varten varten
const user = require('./models/user_model');

const account = require('./models/account_model');
const checkingAcc = require('./models/checkingAcc_model');
const creditAcc = require('./models/creditAcc_model');
const savingsAcc = require('./models/savingsAcc_model');

const card = require('./models/card_model');
const creditCard = require('./models/creditCard_model');
const debitCard = require('./models/debitCard_model');
const combinationCard = require('./models/combinationCard_model');

const transaction = require('./models/transaction_model');
const transfer = require('./models/transfer_model');
const withdraw = require('./models/withdraw_model');
const inquiry = require('./models/inquiry_model');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

//Sanotaan appille, että missä expressejä ja muita käytetään
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Sanotaan appille, että mistä löytyy eri reitit
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);

//Suojataan kaikki reitit, jotka vaativat kirjautumisen (authenticatetoken -alapuolella)
app.use(authenticateToken);

app.use('/account', accountRouter);
app.use('/checkingacc', checkingsAccRouter);
app.use('/creditacc', creditAccRouter);
app.use('/savingsacc', savingsAccRouter);

app.use('/card', cardRouter);
app.use('/debitcard', debitCardRouter);
app.use('/creditcard', creditCardRouter);
app.use('/combinationcard', combinationCardRouter);

app.use('/transaction', transactionRouter);
app.use('/transfer', transferRouter);
app.use('/withdraw', withdrawRouter);
app.use('/inquiry', inquiryRouter);

app.listen(port,function(){
    console.log("sovellus kuuntelee porttia "+port);
});


module.exports = app;
