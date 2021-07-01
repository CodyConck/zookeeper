const path = require('path');
const router = require('express').Router();

//route to serve index.html from our express.js server
//this GET route will respond with an HTML page to display in the browser
router.get('/', (req, res) => {
    //res.sendfile tells them where to find the file we want our server to read, 
    //and sends that back to the client
    res.sendFile(path.join(__dirname, '../../public/assets/index.html'));
  });
  
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });
  
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });
  
  //wildcard route
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  


  module.exports = router;