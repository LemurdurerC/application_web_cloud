const express = require('express')
const session = require('express-session')
const port = 3000
const SESS_LIFETIME = 1000 * 60 * 60 * 2
const IN_PROD = 'development'
const SESS_NAME = 'sid'
const SESS_SECRET = 'ssh!quiet,it\'asecret!'
var cors = require('cors')

const app = express();
app.use(express.static('public'));
app.use(cors({
origin: '*'
}));



  
  app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized : false,
    secret: SESS_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: IN_PROD
    }
  }))


//app.use(function(request, response, next) {
//    response.header("Access-Control-Allow-Origin", "*");
//    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, //Accept");
 //   next();
//});



  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  })
  
 





  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
