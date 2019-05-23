const productsModel = require('../models/products');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  productsModel.findById(req.params.productId, function(err, productsInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Product found!!!", data:{products: productsInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let productsList = [];
productsModel.find({}, function(err, products){
   if (err){
    next(err);
   } else{
    for (let product of products) {
     productsList.push({id: product._id, name: product.name, points: product.points, price: product.price, img_url: product.img_url});
    }
    res.json({status:"success", message: "Products list found!!!", data:{products: productsList}});

   }
});
 },
updateById: function(req, res, next) {
  productsModel.findByIdAndUpdate(req.params.productId,{name:req.body.name}, function(err, productsInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Product updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  productsModel.findByIdAndRemove(req.params.productId, function(err, productsInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Product deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  productsModel.create({ name: req.body.name, points: req.body.points, price: req.body.price, img_url: req.body.img_url }, function (err, result) {
      if (err)
       next(err);
      else
       res.json({status: "success", message: "Product added successfully!!!", data: null});

    });
 },
}
