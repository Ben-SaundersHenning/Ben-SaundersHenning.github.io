$(document).ready(function() {

  $("#test").text('hello this is a jquery test');

  $(".wt-button").on('click', function(event) {
    $("#" + event.target.id).css("border", "5px solid orange");
    $("#" + event.target.id + "-c").addClass("wt1-c-1");
  });
    
});
