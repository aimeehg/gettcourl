const T = require('./config')

  const url = (id, callback) =>{



    T.get('statuses/show/:id', { id }, function(err, data, response) {
      console.log("entro?3")
      //console.log(response)
      console.log(data)
        try {
         data.is_quote_status ?
          callback(undefined, data.entities.urls[0].url) : callback(undefined, data.entities.media[0].url)

       } catch (error) {
        callback('An error occurred while getting the data', undefined)
       }
      })
 
}
module.exports = url