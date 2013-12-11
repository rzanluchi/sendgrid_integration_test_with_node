var _ = require('lodash'),
    parser = require('./sendgrid_parser'),
    Iconv  = require('iconv').Iconv;

/*
 * GET users listing.
 */

exports.inbound = function(req, res){
  var charsets = JSON.parse(req.body.charsets)
  console.log('*******', req.body.text);
  // Printing with utf-8
  console.log(req.body.text.toString('utf8'));
  // Printing with charset from 'charsets' var
  console.log(req.body.text.toString(charsets.text));
  // Printing with latin1
  console.log(req.body.text.toString('latin1'));
  // Setting the convertions encode from latin-1 to UTF-8 with iconv
  var iconv = new Iconv('latin1', 'UTF-8');
  // Converting
  var buff = iconv.convert(req.body.text);
  // printing
  console.log(buff.toString());
  // Setting the conversion encoding iso-8859-1 to UTF-8 with Iconv
  var iconv2 = new Iconv(charsets.text, 'UTF-8');
  // Converting 'text' to UTF-8
  var buff = iconv.convert(req.body.text);
  // Printing the result
  console.log(buff.toString());
  
  res.send(200);
};