/*jshint esversion: 8 */
const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
const router = express.Router();

app.use(express.static('public'));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// app.use('/api', require('./routes'));
app.use('/', router);

// 404: Not found
app.use(function(req, res, next){
    res.status(404).json({ERROR: 'Page not found.'});
});

// 500: Error reporing
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).json({ERROR: 'Internal server error.'});
});

const port = process.env.port? process.env.port:3575;
app.listen(port, (err) => {
  if (err) {
    console.error(`Error::${err}`);
    // logger.error('Error::', err);
  }
  console.info(`Server running on port::${port}`);
  // logger.info(`Server running on port::${port}`);
});
console.log('Running at Port'+port);
