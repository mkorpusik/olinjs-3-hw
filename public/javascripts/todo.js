$(document).ready(function (){
  $('#newform').on('submit', function () {
    $.post("/order/new", $('#newform').serialize());

    return false;
  });

  $('.complete').click(function (event) {
  	 console.log('completing order');
  	 var target = event.target;
  	 console.log(target.value);
     $.post("/orders", {"order":target.value}, 
        function(response) {
          console.log(response);
          $('#'+target.value).remove();
        });
     
    return false;
  });
  
});