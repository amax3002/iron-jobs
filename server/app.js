var express = require('express');

var server = express();

console.log('Hello World');


server.set('port', process.env.PORT || 3000);

server.listen(server.get('port'), function serverStarted(err) {
  if(err) {
      console.error(err);
  } else {
    console.log('Server started at http://localhost:' + server.get('port'));
  }
});
