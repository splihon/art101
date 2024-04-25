// index.js - Arrays and Objects
// Author: Segolen Plihon
// Date: 4/25/24

//Define Variables
myTransport = ["Volkswagen", "Bus", "Scooter", "Rides from Friends"];

//create an object for my main ride
myMainRide = {
  make: "Volkswagen",
  model: "Bettle",
  color: "Brown",
  year: "2017",
  //define a function within our object (a method)
  //that uses the value of year above (using this.year)
  age: function() {
    return 2022 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
