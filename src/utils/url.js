const T = require('./config')

  const url = (id, callback) =>{

    T.get('statuses/show/:id', { id }, function(err, data, response) {
        try {
         data.is_quote_status ?
          callback(undefined, data.entities.urls[0].url) : callback(undefined, data.entities.media[0].url)

       } catch (error) {
        callback('An error occurred while getting the data', undefined)
       }
      })
 
}
module.exports = url