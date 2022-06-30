var events = [];

if (!events) [
  events = {
    value: "",
    time: ""
  }
];


// Display current day
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Compare time slot to current time and adjust color
function setHourColor() {
    var currentHour = moment().hours();

    $(".description").each(function() {
        var timeSlot = parseInt($(this).attr("id"));

        if (timeSlot < currentHour) {
            $(this).addClass("past");
        }
        else if (timeSlot > currentHour) {
            $(this).addClass("future");
        }
        else {
            $(this).addclass("present");
        };
    });
};

setHourColor();