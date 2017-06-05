var getHTML = require("../http-functions");
getHTML.getHTML

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};



function print_lowercase(string)
{
  console.log(string.toLowerCase());
}


getHTML.getHTML(requestOptions, print_lowercase);
