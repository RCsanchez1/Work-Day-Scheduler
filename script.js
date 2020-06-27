//display current date

var d = new Date();

document.getElementById("currentDay").innerHTML = d.toDateString();



function initializeTodos(){
  //just in case we want to update with more timeblock, i will not hardcode timeblocks num here
  $timeBlocks.each(function(){
    var $thisBlock = $(this);
    var toDoObject = {};
    toDoObject.hour = parseInt($thisBlock.attr("data-hour"));
    toDoItems.push(toDoObject);
  }); //this might not be the best bc this is will be set if theres nothing in local storage... but if there IS something in local storage.

  localStorage.setItem("todos", JSON.stringify(toDoItems));
  //console.log(toDoItems);
}

function renderSchedule(){
  toDoItems = localStorage.getItem("todos");
  toDoItems = JSON.parse(toDoItems);
  //loop thru array then assign the text to the timeBlock with data-hour equal to hour. 
  //make a variable where [data-hour={hour}] then plug it in to the selector $('[data-hour={hour}')
  for (var i = 0; i < toDoItems.length; i++){
    var itemHour = toDoItems[i].hour;
    var itemText = toDoItems[i].text; 
    console.log(itemHour + "|" + itemText);

    $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
  }



}




 



