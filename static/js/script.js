$(document).ready(function() {

  var wt1_showing = false;
  var wt2_showing = false;
  var wt3_showing = false;

  $("#test").text('hello this is a jquery test');

  $(".wt-button").on('click', function(event) {
    console.log(event.target.id);
    switch(event.target.id) {
      case "wt1":
        if(wt1_showing) {
          $("#" + event.target.id + "-c").removeClass("wt1-c");
          $("#" + event.target.id + "-c").css("max-height", "0");
        } else {
          $("#" + event.target.id + "-c").addClass("wt1-c");
          $("#" + event.target.id + "-c").css("max-height", "fit-content");
        }
        wt1_showing = !wt1_showing;
        break;
      case "wt2":
        if(wt2_showing) {
          $("#" + event.target.id + "-c").removeClass("wt2-c");
          $("#" + event.target.id + "-c").css("max-height", "0");
        } else {
          $("#" + event.target.id + "-c").addClass("wt2-c");
          $("#" + event.target.id + "-c").css("max-height", "fit-content");
        }
        wt2_showing = !wt2_showing;
        break;
      case "wt3":
        if(wt3_showing) {
          $("#" + event.target.id + "-c").removeClass("wt3-c");
          $("#" + event.target.id + "-c").css("max-height", "0");
        } else {
          $("#" + event.target.id + "-c").addClass("wt3-c");
          $("#" + event.target.id + "-c").css("max-height", "fit-content");
        }
        wt3_showing = !wt3_showing;
        break;
    }
  });

});
