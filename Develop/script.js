//Creates scheduled item
$(".taskcontent").on("click", "p", function() {
  var content = $(this).text().trim();
  var textInput = $("<textarea>").addClass("form-control").val(content);
  $(this).replaceWith(textInput); 
});
