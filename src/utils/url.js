const T = require('./config')

  const url = (id, callback) =>{

    T.get('account/verify_credentials', {
      include_entities: false,
      skip_status: true,
      include_email: false
  }, onAuthenticated)

  function onAuthenticated(err, res) {
      if (err) {
        console.log('hay un error')
          throw err
      }

      console.log('Authentication successful. Running...\r\n')
  }

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