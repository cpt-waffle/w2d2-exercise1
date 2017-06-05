var https = require("https");

function getAndPrintChunks() {

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");
    //console.log(response);
    response.on('data', function(data) {
      console.log(data + '\n');
    });
  });

};


getAndPrintChunks();