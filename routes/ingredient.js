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
  var order = new Order({ });
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