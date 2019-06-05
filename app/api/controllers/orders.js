const ordersModel = require('../models/orders');
module.exports = {
create: function(req, res, next) {
  ordersModel.create({ product_name: req.body.product_name, quantity: req.body.quantity, total_price: req.body.total_price, user_id: req.body.user_id }, function (err, result) {
      if (err)
       next(err);
      else
       res.json({status: "success", message: "Order added successfully!!!", data: null});

    });
 },
}
