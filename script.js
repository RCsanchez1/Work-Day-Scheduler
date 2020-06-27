var d = new Date();

document.getElementById("currentDay").innerHTML = d.toDateString();



let entireWorkDay = {
    "8 AM" : "",
    "9 AM" : "",
    "10 AM" : "",
    "11 AM" : "",
    "12 PM" : "",
    "1 PM"  : "",
    "2 PM" : "",
    "3 PM" : "",
    "4 PM" : "",
    "5 PM" : "",
};
//ince I labeled several ids on each row numerically, setting this variable will let me more easily reference said ids.
let counter = 1;
//Initial function on page load. Sets local storage if there is none currently. Otherwise, it parses what is already there.
$(document).ready(function() {
    if (!localStorage.getItem('entireWorkDay')){
        updateDailyTasks(entireWorkDay);
    } else {
        let object = JSON.parse(localStorage.getItem('entireWorkDay'))
        updateDailyTasks(object)
        }


        var dateHeader = document.getElementById('currentDay');
 
        var current = moment().format('MMMM Do YYYY,')

         dateHeader.textContent = current;
         console.log(dateHeader);

});

function updateDailyTasks (workdayObject){
 $(".calender-row").each(function(){
    let texting = $(this).children("div");
    $(this).children("textarea").text(workdayObject[texting.text()])
 })
}