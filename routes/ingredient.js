var models = require('../models');
//var Ingredient = require('../models');  This would work. Why?
var Ingredient = models.Ingredient;
var Order = models.Order;

exports.new = function(req, res){
  console.log("hey thar");
  res.render("new_ingredient",{title:'enter in an ingredient'});
};

exports.create = function(req, res){
  console.log("You created an ingredient!");
  var ingredient = new Ingredient({ name: req.body.name, cost: req.body.cost});
  ingredient.save(function (err) {
    if (err)
      return console.log("error we couldn't save ingredient");
    
    res.render("create_ingredient", {title:'You created an ingredient!'});
  });

};

exports.create_order = function(req, res){
  console.log("You created an order!");
  console.log(req.body);
  var order = new Order({ingredients:req.body.ingredient});
  order.save(function (err) {
    if (err)
      return console.log("error we couldn't save order");
    // redirect to new order page
    res.redirect('/order/new');
  });

};

exports.order = function(req, res){
  console.log("create an order");
  var ingredients = Ingredient.find({}, function (err, docs) {
    if (err)
      return console.log("error", ingredients);
    // send it back
    res.render("new_order",{ingredients: docs, title:'Create your order!'});
  });
};

exports.delete_order = function(req, res){
  console.log("deleting order");
  console.log(req.body);
  // remove order
  Order.remove({'_id': req.body._id}, function (err) {
    if (err) return handleError(err);
    res.redirect('/orders');
  });
};

exports.orders = function(req, res){
  console.log("list of pending orders");
  var orders = Order.find({}, function (err, docs) {
    if (err)
      return console.log("error", orders);
    // send it back
    res.render("orders",{orders: docs, title:'Pending Orders'});
  });
};
