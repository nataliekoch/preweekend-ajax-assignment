$(document).ready(function(){

    $(".clicky-button").on('click', clickyButton);


});

function clickyButton(){
    var data = {};

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(gremlins){
            data = gremlins;
            logData(data);
        }
    });
}

function logData(data){
    for(var i = 0; i < data.people.length; i++) {
        $(".container").append("<p>" + data.people[i] + "<p>");
        console.log(data);

    }

}

