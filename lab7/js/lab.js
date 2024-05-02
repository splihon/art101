// index.js - Functions
// Author: Segolen Plihon
// Date: 5/1/24

// Constants

// Functions
//Function to sort user's name
function sortUserName(){
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //Split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //Sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //Join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //Note the above lines could have been written as one line"
    // userName.toLower().split("").sort().join("")
    return nameSorted;
}

//Bonus code for bonus task
//Ignore/Omit Spaces
//Function to sort user's name ignoring spaces
function sortNameIgnoringSpaces(userName) {
    var cleanedName = userName.replace(/\s/g, '').split('').sort().join('');
    return cleanedName;
}

//Ask for user's name once
var userName = window.prompt("Enter your name:");

//Using user's name in both functions
var sortedName = sortUserName(userName);
var cleanedAndSortedName = sortNameIgnoringSpaces(userName);

// Output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");

