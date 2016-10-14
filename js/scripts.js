var numInput;
var numList = [];

var populateArray = function (numInput) {
  for (i = 1; i < numInput; i++) {
    numList.push(i);
  }
}

var outputPingPong = function () {
  numList.each(function(integer) {
    if (integer % 15 === 0) {
      $("#output").append("<li>" + "Ping Pong!" + "</li>");
    }
    else if (integer % 5 === 0) {
      $("#output").append("<li>" + "...Pong!" + "</li>");
    }
    else if (integer % 5 === 0) {
      $("#output").append("<li>" + "Ping..." + "</li>");
    }
    else
    {
      $("#output").append("<li>" + integer + "</li>");
    }
  });
}
