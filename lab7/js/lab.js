// index.js - Functions
// Author: Segolen Plihon
// Date: 5/1/24

// Constants

// Functions

// Functions

// Function to sort user's name
function sortUserName(userName) {
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// Function to sort user's name ignoring spaces
function sortNameIgnoringSpaces(userName) {
    var cleanedName = userName.replace(/\s/g, '').split('').sort().join('');
    return cleanedName;
}

// Ask for user's name once
var userName = window.prompt("Hi. Please tell me your name so I can fix it.");

// Using the user's name in both functions
var sortedName = sortUserName(userName);
var cleanedAndSortedName = sortNameIgnoringSpaces(userName);

// Output the sorted names
document.writeln("Oh hey, I've fixed your name: ", sortedName, "<br>");
document.writeln("Sorted name without spaces:", cleanedAndSortedName, "<br>");

// Optionally, you can also console log the cleaned and sorted name
console.log("Sorted name without spaces:", cleanedAndSortedName);
