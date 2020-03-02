$(document).ready(function(){


    // Displaying todays date 
    let day = moment().format('dddd');
    let monthAndDay = moment().format('MMMM Do');

    $("#currentDay").text(day + ", " + monthAndDay);

    // on click listener
    $(".btn").on("click", function(event){
        event.preventDefault();
        
        // Turn text into readonly
        console.log($(".form-control").val());
    })

    // storing items into local storage
    function storeEvent(){
    
    }
})