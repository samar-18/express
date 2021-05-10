const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'));


const authMiddleware = (req,res,next) =>{
    var date = new Date(Date.now()); //  let d = new Date(Date.now());
   if((date.getDay() > 0) && (date.getDay() < 6) && (date.getHours() > 9 )&& (date.getHours() < 17)){
        console.log("hello")
        next();
     } else{
        res.send('user is not authorized')
    }
};
app.use(authMiddleware);


//routes
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/Home.html');

})

app.get('/contact', (req,res) =>{
    res.sendFile(__dirname + '/public/contact.html');

})

app.get('/service', (req,res) =>{
    res.sendFile(__dirname + '/public/service.html');

})
//router.get('/css/style.css', (req,res)=>{
  //  res.sendFile(__dirname + '/public/css/style.css');
//});

app.listen(5000,(err) =>{
    if(err) console.log(err)
    else console.log('server is running on port 5000')
})