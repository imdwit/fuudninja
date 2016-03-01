      var connect = require('connect'),
      serve = require('serve-static');


      var app = connect();

      app.use(serve(__dirname + '/dist'));

      app.listen(8080);
