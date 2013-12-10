var _ = require('lodash');

var Parser = function(response){
   
  this.envelope = JSON.parse(response.envelope)
  this.data = response
  
  this.getTos = function (){
    return this.envelope.to
  };
   
  /*
    from:
    text:
    html:
    subject:     
  */
  this.getData = function(){
    return {
      from    : this.data.from,
      subject : this.data.subject,
      text    : this.data.text.toString('utf-8'),
      html    : this.data.html.toString('base64')
    };
  };
  
  this.getAttachments = function(){
    
  };
  
  return this
};

module.exports = Parser