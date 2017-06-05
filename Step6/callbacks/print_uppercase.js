var getHTML = require("../http-functions");
getHTML.getHTML

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};



function print_uppercase(string)
{
  console.log(string.toUpperCase());
}


getHTML.getHTML(requestOptions, print_uppercase);
