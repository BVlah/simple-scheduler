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

// Click Save Button to Save Events to Local Storage
$(".saveBtn").on("click", function() {
    var timeId = $(this).prev().attr("id");
    var events = $(this).prev().val();

    localStorage.setItem(timeId, events);
});

// Load Events
function loadEvents() {
    $(".description").each(function() {
        var hour = parseInt($(this).attr("id"));
        var hourlyEvent = localStorage.getItem(hour);

        $(this).val(hourlyEvent);
    })
}

// Update Event Colors Every Minute
setInterval(function () {
        setHourColor();
}, 60000);  

setHourColor();
loadEvents();