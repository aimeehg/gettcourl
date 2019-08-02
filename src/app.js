const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const url = require('./utils/url')

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
  

app.get('/geturl', (req, res) => {
    if(!req.query.id){
        return res.send({
            error: 'You must provide an id'
        })
    }

    url(req.query.id, (error, url) => {
        if (error){
          return  res.send({ error })
        } 
        res.send({url})
    })

})


app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})