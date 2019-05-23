//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/gift_shop';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;