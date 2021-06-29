const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const SESS_LIFETIME = 1000 * 60 * 60 * 2
const IN_PROD = 'development'
const SESS_NAME = 'sid'
const SESS_SECRET = 'ssh!quiet,it\'asecret!'


app.use(express.static('public'));




  
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


  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
  })





  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
