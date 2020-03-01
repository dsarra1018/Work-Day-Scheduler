$(document).ready(function(){

    // Displaying todays date 
    let day = moment().format('dddd');
    let monthAndDay = moment().format('MMMM Do');

    $("#currentDay").text(day + ", " + monthAndDay);

    






})



