const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const OrdersSchema = new Schema({
 product_name: {
  type: String,
  trim: true,
  required: true,
 },
 quantity: {
   type: Number,
   trim: true,
   required: true
 },
 total_price: {
   type: Number,
   trim: true,
   required: true
 },
 user_id: {
   type: String,
   trim: true,
   required: true
 },
 ordered_date: {
   timestamp: { type: Date, default: Date.now}
 }
});
module.exports = mongoose.model('Orders', OrdersSchema)
