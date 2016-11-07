//Variable Declarations

var numInput;
var numList = [];

var ping = "Ping..."
var pong = "...Pong!"
var pingPong = "Ping Pong!"

//Back-End Logic

var populateArray = function (numInput) {

  for (i = 1; i < numInput + 1; i++)
  {
    numList.push(i);
  }

}

var outputPingPong = function(integer) {
  var result;

  numList.map(function(integer) {
    if (integer % 15 === 0)
    {
      result += "Ping Pong! ";
    }
    else if (integer % 5 === 0)
    {
      result += "...Pong! ";
    }
    else if (integer % 3 === 0)
    {
      result += "Ping... ";
    }
    else
    {
      result +=  integer + " ";
    }
  });
  document.body.appendChild(document.createTextNode(result));
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
