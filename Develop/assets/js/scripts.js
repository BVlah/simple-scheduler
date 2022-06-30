var events = [];

if (!events) [
  events = {
    value: "",
    time: ""
  }
];

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));