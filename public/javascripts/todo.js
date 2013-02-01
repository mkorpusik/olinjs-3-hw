$(document).ready(function (){
  $('#newform').on('submit', function () {
    $.post("/order/new", $('#newform').serialize());

    return false;
  })

  $('#ordersform').on('submit', function () {
    $.post("/orders", $('#ordersform').serialize());
    console.log('completing order');
    return false;
  })
  
})