const port = 4323;
const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('ok');
});

app.listen(port);
