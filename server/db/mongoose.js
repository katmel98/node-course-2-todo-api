const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var uri = 'mongodb://localhost:27017/TodoApp';
var opts = { useNewUrlParser: true };
mongoose.connect(uri,opts);

module.exports = {mongoose};