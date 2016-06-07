var primeTrue = function(input) {
  var primeList = [];
  for (index = 1; index <= input; index +=1) {
    if ((index%2>0) && (index%3>0) && (index%5>0) && (index%7>0)) {
      primeList.push("<li>" + index + "</li>");
    }
  }

  return primeList;
}

$(document).ready( function() {
  $("button").click(function() {
  var potentialPrime = parseInt($("#potentialPrime").val());
  var answer = primeTrue(potentialPrime);
  $("ul").prepend(answer.reverse());
  });
});
