var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var cors = require('cors');

// this makes our app cors-enabled
// this line MUST come before the "use ... static" line below
app.use( cors() );

// makes our app serve up the files in the public directory
app.use(express.static('public'));

app.listen(port, function(){
  console.log('App running on port',port);
});

