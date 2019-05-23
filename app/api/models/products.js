const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({
 name: {
  type: String,
  trim: true,
  required: true,
 },
 points: {
   type: Number,
   trim: true,
   required: true
 },
 price: {
   type: Number,
   trim: true,
   required: true
 },
 img_url: {
   type: String,
   trim: true,
   required: true
 }
});
module.exports = mongoose.model('Products', ProductsSchema)
