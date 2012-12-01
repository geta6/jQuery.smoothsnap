$(function(){
  $("body").smoothsnap();

  // insert sample contents
  for(var i = 1; i < 100; i++){
    var section_body = ""
    for(var j = 0; j < 30; j++){
      section_body += "section"+i+" body";
    }
    var section = $("<div>").append(
      $("<h3>").html("section"+i)
    ).append(
      $("<p>").html(section_body)
    );
    $("#main").append(section);
  }
});
