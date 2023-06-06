Deployed page: https://99anvar99.github.io/Calendar-Application/

# Calendar-Application
![Screenshot_Calendar](https://github.com/99Anvar99/Calendar-Application/assets/60616540/34420f07-28af-457b-80e1-5b1d72e2dbe2)

# Description
a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

# Note
- Calendar works on 12hr format (Am/Pm) 
- if your current time is passed 5pm the calendar will be grey(past) showing that the work day is over!
- if your current time is before 9am the calendar will be green(future) showing that work day is not started yet!
- if your current time is in the (9am-5pm) calendar will be red (Present) showing you the current hour of the work day!

- Here is a representation in coding:
if (CurrentTime > 5pm && CurrentTime < 9am)
{
  Not at work!
}
else
{
  At work!
}

# Changes
- Added "Save" button event listener (saves your input into local storage)
- Added automatically load users input from local storage (if there is any saved inputs) 
- Added Date and current time display
- Added Instructional Icon/text display
- Added Standard business hours (9am-5pm)
