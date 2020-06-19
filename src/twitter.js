var util = require('util');
var oauth = new (require('oauth').OAuth)(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'bQq9Of8XsIUTqRUkRRsYhSpsz', // consumer key
    'f214PfXT8IWmfx1Mm6xHEOzz5eDiiCZ6J26T7Lp44WksXikjkg', // consumer secret
    '1.0',
    null, // callback URL
    'HMAC-SHA1'
);

oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
    console.log("entro?!1")
    if(error)
    {
        console.log(error)
        console.log('entro?!2')
        util.puts('error :' + error)
    } 
        else {
        util.puts('oauth_token :' + oauth_token)
        util.puts('oauth_token_secret :' + oauth_token_secret)
        util.puts('requestoken results :' + util.inspect(results))
        util.puts("Requesting access token")

        console.warn('https://twitter.com/oauth/authenticate?oauth_token=' + oauth_token + "\n");
        var stdin = process.openStdin();
        console.warn('PIN: ');
        stdin.on('data', function(d) {
            d = (d+'').trim();
            if(!d) {
                console.warn('\nTry again: ');
            }
            console.warn('Received PIN: ' + d);
            oauth.getOAuthAccessToken(oauth_token, oauth_token_secret, d, function(err, oauth_access_token, oauth_access_token_secret, results2) {
                if(err) throw err;

                console.log(results2);

                oauth.accessToken = oauth_access_token;
                oauth.accessTokenSecret = oauth_access_token_secret;

                oauth.getProtectedResource("https://api.twitter.com/1/statuses/home_timeline.json", "GET", oauth_access_token, oauth_access_token_secret, function (error, data, response) {
                    util.puts(data);
                });
                stdin.destroySoon();
            });
        });
    }
});
