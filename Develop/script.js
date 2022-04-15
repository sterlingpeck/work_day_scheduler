//Creates scheduled item
$(".taskcontent").on("click", "p", function() {
  var content = $(this).text().trim();
  var textInput = $("<textarea>").addClass("form-control").val(content);
  $(this).replaceWith(textInput); 
});

//Saves our scheduled item
$(".saveBtn").on("click", function() {
  var key = $(this).prev().attr('id');
  var value = $(this).prev().text();
  localStorage.setItem(key, value);
});

//Replaces scheduled item
$('.taskcontent').on('blur', 'textarea', function() {
  var text = $(this).val().trim();
  var newPar = $('<p>').text(text);
  $(this).replaceWith(newPar);
});

