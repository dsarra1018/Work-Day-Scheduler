$(document).ready(function(){

    init();


    // Displaying todays date 
    let day = moment().format('dddd');
    let monthAndDay = moment().format('MMMM Do');

    $("#currentDay").text(day + ", " + monthAndDay);

    // on click listener 9 am
    $("#9am").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt9", $("#9am-block").val());
    })

    // on click listener 10 am
    $("#10am").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt10", $("#10am-block").val());
    })

    // on click listener 11 am
    $("#11am").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt11", $("#11am-block").val());
    })

    // on click listener 12 pm
    $("#12pm").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt12", $("#12pm-block").val());
    })

    // on click listener 1 pm
    $("#1pm").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt1", $("#1pm-block").val());
    })

    // on click listener 2 pm
    $("#2pm").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt2", $("#2pm-block").val());
    })

    // on click listener 3 pm
    $("#3pm").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt3", $("#3pm-block").val());
    })
    
    // on click listener 4 pm
    $("#4pm").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt4", $("#4pm-block").val());
    })

    // on click listener 5 pm
    $("#5pm").on("click", function(event){
        event.preventDefault();
        
        localStorage.setItem("eventAt5", $("#5pm-block").val());
    })

    function init(){
        localStorage.getItem("eventAt9");
        localStorage.getItem("eventAt10");
        localStorage.getItem("eventAt11");
        localStorage.getItem("eventAt12");
        localStorage.getItem("eventAt1");
        localStorage.getItem("eventAt2");
        localStorage.getItem("eventAt3");
        localStorage.getItem("eventAt4");
        localStorage.getItem("eventAt5");
        
    }
    

})