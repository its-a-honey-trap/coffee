var
  cheerio = require('cheerio'),
  request = require('request');

module.exports = function (callback) {
  request('http://www.matteroftaste.ca', function(err, response, html){
    if(err) return callback(err);

    var 
      $ = cheerio.load(html.toString()),
      coffees = $('.text_body').children().first()
        .html()
        .match(/%.*"/)
        .toString()
        .replace(/%20/g, ' ');

    coffees = coffees.substring(0, coffees.length - 2);
    callback(null, coffees.split('%0A-').map(function (name) { return name.trimLeft(); }).join('\n'));
  });
};
