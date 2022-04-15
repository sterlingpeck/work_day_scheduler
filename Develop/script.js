// Display date
function displayTodaysDate() {
  $("#currentDay").text(moment().format('MMMM Do YYYY'));
}

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

// Loads scheduled items from local storage
function loadTasks() {
  for (let i = 1; i < 9; i++) {
      $('#' + i).find('p').text(localStorage.getItem(i));
  }
}

loadTasks();
displayTodaysDate();
