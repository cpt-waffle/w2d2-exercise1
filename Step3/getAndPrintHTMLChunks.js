function getAndPrintHTML (options) {
  var https = require("https");
  /* Add your code here */
  let buffer = "";
  https.get(options, function(response) {
    response.setEncoding("utf8");
    response.on('data', function(data) {
      buffer += data;
    });
    response.on('end', function() {
      console.log(buffer);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
