var api_user = "KidsContent"
var api_key = "4KidsContent"
var sendgrid  = require('sendgrid')(api_user, api_key);

sendgrid.send({
  to:       'raphael@42vivid.com',
  from:     'raphael@42vivid.com',
  subject:  'Hello World',
  text:     'My first email through SendGrid.'
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});


