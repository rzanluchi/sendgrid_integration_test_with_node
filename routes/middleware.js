var multiparty = require('multiparty');
var formidable = require('formidable'),
    MailParser = require("mailparser").MailParser,
    mailparser = new MailParser();

module.exports = function (req, res, next) {
  // var form = new multiparty.Form();
  var form = new formidable.IncomingForm();
  
  mailparser.on('end', function(mail_object){
    console.log('-****', mail_object);
    next();
  })
  
  console.log('starting receiving data');
  console.log(req.rawData);
  // req.on('data', function(buffer){
  //   parts = buffer.toString().split("--xYzZY");
  //   for (var x in parts){
  //     if (parts[x].indexOf('name="text"') > 0)
  //       // mailparser.write(parts[x]);
  //       // mailparser.end()
  //       console.log('----->', parts[x].toString('utf-8'));
  //   }
  // })

  
  form.parse(req, function(err, fields, files) {
    // console.log("---->", fields, files);
    console.log('***');
    var buff = new Buffer(fields.text, 'utf-8').toString('utf-8');
    console.log(buff);
    next(); 
    // mailparser.write(fields);
    // mailparser.end()
  });
  
}

var myRawParser = function(req, res, next){
    req.rawData = '';
    if(req.header('content-type') == 'text/plain'){
        req.on('data', function(chunk){
            req.rawData += chunk;
        })
        req.on('end', function(){
            next();
        })
    } else {
        next();
    }
}