//Variable Declarations

var numInput;
var numList = [];

//Back-End Logic

var populateArray = function (numInput) {
  if (numInput > 10000)
  {
    $("#output").append("<li><h4>" + "Please enter a number less than or equal to 10,000." + "</h4></li>");
  }
  else if (numInput === NaN){
    $("#output").append("<li><h4>" + "Please enter a number less than or equal to 10,000." + "</h4></li>");
  }
  else
  {
    for (i = 1; i < numInput + 1; i++)
    {
      numList.push(i);
    }
  }

}

var outputPingPong = function () {
  numList.map(function(integer) {
    if (integer % 15 === 0)
    {
      $("#output").append("<li>" + "Ping Pong!" + "</li>");
    }
    else if (integer % 5 === 0)
    {
      $("#output").append("<li>" + "...Pong!" + "</li>");
    }
    else if (integer % 3 === 0)
    {
      $("#output").append("<li>" + "Ping..." + "</li>");
    }
    else
    {
      $("#output").append("<li>" + integer + "</li>");
    }
  });
}

//Logic pertaining to User Interface

$(document).ready(function () {
  $("form#userInput").submit(function(event) {

    event.preventDefault();
    $("#output").empty();

    numInput = parseInt($("input#userInput").val());
    numList = [];
    populateArray(numInput);
    outputPingPong();

    $("#output").show()

    $("#reset").click(function() {
      location.reload();
    });
  });
});
