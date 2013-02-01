$(function () {
  $('#newform').on('submit', function () {
  	$( "input" ).each(function( index ) {
      if ('checkbox:checked')
      	console.log('checked');
    });
    $.post("/order/new", $('#newform').serialize());

    return false;
  })
})