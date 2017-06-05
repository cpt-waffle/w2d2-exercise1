var getHTML = require("../http-functions");
getHTML.getHTML

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};



function print_reverse(string)
{
  console.log(string.split("").reverse().join(""));
}


getHTML.getHTML(requestOptions, print_reverse);
