$(document).ready(function() {

var upto;

function fizzbuzz(upto) {
    var i;
    
    for (i=1; i<=upto; i++) {
        if (i%3===0 && i%5===0) {
            console.log ("FizzBuzz")
            $(".fizzbuzz").append ("<li> FizzBuzz </li>");
        } else if (i%3===0) {
            console.log ("Fizz")
            $(".fizzbuzz").append ("<li> Fizz </li>");
        } else if (i%5===0) {
            console.log ("Buzz")
            $(".fizzbuzz").append ("<li> Buzz </li>");
        } else {
            console.log (i);
            $(".fizzbuzz").append ("<li>" +i+ "</li>");
        };
    };
};
    
upto=prompt("What number would you like to count up to?");

    if (upto%1 !== 0) {
        alert("Please enter a number that is not a decimal.")
    } else if (upto == "" ) {
        alert("Please enter a number.")
    } else {
        fizzbuzz(upto)
    };

});