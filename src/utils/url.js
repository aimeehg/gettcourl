const T = require('./config')
T.get('account/verify_credentials', { skip_status: true })
.catch(function (err) {
  console.log('caught error', err.stack)
})
.then(function (result) {
  // `result` is an Object with keys "data" and "resp".
  // `data` and `resp` are the same objects as the ones passed
  // to the callback.
  // See https://github.com/ttezel/twit#tgetpath-params-callback
  // for details.

  console.log('data', result.data);
})
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