// lab.js - this simple Javascript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
// Author: Segolen Plihon
//5/8/24

// //add button to challenge section
// $("#challenge").append("<button id = 'button-challenge'>Make Special</button>");
// //add an event listener to button
// $("#button-challenge").click(function(){
//     //now add (or subtract) the "special" class to the section
//     $("#challenge").toggleClass("special");
// });

// //add button to problem section
// $("#problem").append("<button id = 'button-problem'>Make Special</button>");
// //add an event listener to button
// $("#button-problem").click(function(){
//     //now add (or subtract) the "special" class to the section
//     $("#problem").toggleClass("special");
// });

// //add button to results section
// $("#results").append("<button id = 'button-results'>Make Special</button>");
// //add an event listener to button
// $("#button-results").click(function(){
//     //now add (or subtract) the "special" class to the section
//     $("#results").toggleClass("special");
// });

//Bonus task code:
$('.special-section').append("<button>Make Special</button>")
.find("button").click(function(){
    $(this).parent().toggleClass('special');
})
