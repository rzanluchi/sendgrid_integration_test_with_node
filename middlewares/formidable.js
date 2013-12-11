var formidable = require('formidable'),
    Iconv  = require('iconv').Iconv;

module.exports = function (req, res, next) {
  var form = new formidable.IncomingForm();
  
  form.parse(req, function(err, fields, files) {
    // Printing the content of 'text'
    console.log('*******', fields.text[0]);
    // Printing with utf-8
    console.log(fields.text[0].toString('utf8'));
    // Printing with charset from 'charsets' var
    console.log(fields.text[0].toString(fields.charsets.text));
    // Printing with latin1
    console.log(fields.text[0].toString('latin1'));
    // Setting the convertions encode from latin-1 to UTF-8 with iconv
    var iconv = new Iconv('latin1', 'UTF-8');
    // Converting
    var buff = iconv.convert(fields.text[0]);
    // printing
    console.log(buff.toString());
    // Setting the conversion encoding iso-8859-1 to UTF-8 with Iconv
    var iconv2 = new Iconv(fields.charsets.text, 'UTF-8'); // Iconv said that conversion is not suported
    // Converting 'text' to UTF-8
    var buff = iconv.convert(fields.text[0]);
    // Printing the result
    console.log(buff.toString());
    
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end();
  });
  
}
