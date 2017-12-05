
var fs = require('fs');
var casper = require("casper").create({
  verbose: true,
  logLevel: 'error',     // debug, info, warning, error
  pageSettings: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
  }
});

var usuarioTwitter = casper.cli.get(0).replace(/(\n|\r)+$/, '');
var outputfilename = "scraped_data/"+ usuarioTwitter + ".txt";
var stream = fs.open(outputfilename,"w");
var title;

var url = "http://twitter.com/"+ usuarioTwitter ;

casper.start(url, function() {
  this.echo(this.getTitle());
  title = this.getTitle();
  stream.writeLine(title);
});


casper.then(function(){
  stream.close();
  stream.flush();

});

casper.run();