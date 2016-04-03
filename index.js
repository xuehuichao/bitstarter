var express = require('express');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var content = fs.readFileSync('index.html', 'utf8');
  
  response.send(content);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
