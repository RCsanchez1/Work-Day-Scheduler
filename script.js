var d = new Date();

document.getElementById("currentDay").innerHTML = d.toDateString();

$(document).ready(function () {
    var appointments = new Array();
    var appointment1 = {
        id: "id1",
        description: "George brings projector for presentations.",
        location: "",
        subject: "Quarterly Project Review Meeting",
        calendar: "Room 1",
        start: new Date(2019, 10, 23, 9, 0, 0),
        end: new Date(2019, 10, 23, 16, 0, 0)
    }
    var appointment2 = {
        id: "id2",
        description: "",
        location: "",
        subject: "IT Group Mtg.",
        calendar: "Room 2",
        start: new Date(2019, 10, 24, 10, 0, 0),
        end: new Date(2019, 10, 24, 15, 0, 0)
    }
    var appointment3 = {
        id: "id3",
        description: "",
        location: "",
        subject: "Course Social Media",
        calendar: "Room 3",
        start: new Date(2019, 10, 27, 11, 0, 0),
        end: new Date(2019, 10, 27, 13, 0, 0)
    }
    var appointment4 = {
        id: "id4",
        description: "",
        location: "",
        subject: "New Projects Planning",
        calendar: "Room 2",
        start: new Date(2019, 10, 23, 16, 0, 0),
        end: new Date(2019, 10, 23, 18, 0, 0)
