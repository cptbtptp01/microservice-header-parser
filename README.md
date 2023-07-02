# header parser microservice
A full-stack javascript web development project. The app returns the __ip adress__, __preferred language__, __software details__ of the device user is using.
## what
http headers let client and the server pass additional information with an http request or response
## technologies
- node.js
- express
- api
- json
- npm
- javascript
- html5
- css3
## how
a user can get info through `/api/whoami`, when this route is accessed, it extracts the IP address, language, and software details from the request headers and sends back a JSON response containing the parsed information.
## steps
1. main server file: `server.js`
2. import dependencies, set up the server
3. set up a GET route, handle extracting ip address, language and software from the request headers
4. sent back a JSON response containing the parsed information
## start server `npm start`
## test
