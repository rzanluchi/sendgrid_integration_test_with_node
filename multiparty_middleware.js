
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var email_test = require('./routes/email_test');
var http = require('http');
var path = require('path');
var formidable = require('./middlewares/multiparty');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(formidable);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.json());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// app.get('/', routes.index);
app.post('/', email_test.inbound);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
