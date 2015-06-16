var express = require('express');

module.exports = {
  start: function () {
    var 
      app = express(),
      port = process.env.PORT ? process.env.PORT : 4400,
      bodyParser = require('body-parser');

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.listen(port);

    console.log('Up and running on port', port);
}
};
