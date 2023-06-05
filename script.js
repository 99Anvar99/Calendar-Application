$(function () {
  // Listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the parent time-block
    var timeBlockId = $(this).parent().attr("id");
    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();
    // Save the user input in local storage using the time block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply past, present, or future class to each time block
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var currentHour = dayjs().hour();
    var timeBlockHour = parseInt(timeBlockId.split("-")[1]);
    //reset all the classes
    $(this).removeClass("past present future");
    // Apply past, present, or future class to each time block
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
    // Get the user input from local storage
    var userInput = localStorage.getItem(timeBlockId);
    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });

  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  // Function to update the current time
   function updateCurrentTime() {
    var currentTime = dayjs().format("h:mm:ss A");
    $("#currentTime").text("Current Time: " + currentTime);
  }
  
  // Update the current time every second
  setInterval(updateCurrentTime, 1000);

  // Display the instructions
  $("#instructions").text("⚪ Past |🔴 Present |🟢 Future");
});