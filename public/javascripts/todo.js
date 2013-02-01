$(function () {
  $('#newform').on('submit', function () {
  	$( "input" ).each(function( index ) {
      if ('checkbox:checked')
      	alert('checked');
    });
    $.post("/order/new", $('#newform').serialize());

    return false;
  })
})