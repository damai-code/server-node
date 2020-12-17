// ! make some variable and assign value
let http = require('http');
let finalhandler = require('finalhandler');
let Router = require('router');

const router = new Router();

let server = http.createServer( function(request, response) {
  router(request, response, finalhandler(request, response))
})

server.listen(3000, function () {
  console.log('Hi, my Server already running on port 3000!!!!!')
})

// ! setiap ada tanda kurung (), berarti itu adalah function

/* we already know basic
- variable
  - let / var -> value nya bisa berubah
  - const -> value nya fix / tidak bisa berubah


- function

format penulisan
- createServerRightNow -> format camel case
- create_server_right_now -> format snake case
*/