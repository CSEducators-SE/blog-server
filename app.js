var path = require('path');
var express = require('express');
var articles = require('./routes/articles');
var app = express();

app.use('/articles',articles);

app.listen(3000, () => console.log('Example app listening on port 3000!'))


