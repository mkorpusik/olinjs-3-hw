var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/burgers');

var ingredientSchema = mongoose.Schema({
  name: String,
  cost: String
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

var orderSchema = mongoose.Schema({
  customerName    : String,
  ingredients : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var Order = mongoose.model('Order', orderSchema);

module.exports.Ingredient = Ingredient;
module.exports.Order = Order;