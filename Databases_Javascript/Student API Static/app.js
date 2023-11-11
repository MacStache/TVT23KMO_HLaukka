const express=require('express');
//const port=3000;
const studentRouter=require('./controllers/student');
const userRouter=require('./controllers/user');
const loginRouter=require('./controllers/login');

const app=express();
const dotenv=require('dotenv');
const user = require('./models/user_model');
dotenv.config();
const port=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use ('/student', studentRouter);
app.use ('/user', userRouter);
app.use ('/login', loginRouter);

app.listen(port,function(){
    console.log("sovellus kuuntelee porttia "+port);
});

app.get('/',function(request,response){
    response.send("Express API esimerkki");
});

module.exports=app;