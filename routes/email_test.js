var _ = require('lodash');
    parser = require('./sendgrid_parser');

/*
 * GET users listing.
 */

exports.inbound = function(req, res){
  
  // var parsed_data = parser(req.body);
  console.log(req.body);
  // console.log(req.rawData);
  // console.log(parsed_data.getData());
  
  res.send(200);
};