const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


var cors = require('cors');
app.use(bodyParser.json());
// route
// var rgMultiFileUpload = require('./UploadScripts/rg_multi_upload');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// GETS RID OF NEED FOR NODE_MODULES PATH
app.use(express.static('public'));
app.use(express.static('node_modules'));


app.use('/vendor', express.static(__dirname + "/public/vendor"));

// SERVING 'index.html'
app.use('*', function (req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});

app.use(function (req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);

});

module.exports = app;

// ===================
// RTC STUFF LIVES IN /bin/www
//=======================


