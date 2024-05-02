// index.js - Functions
// Author: Segolen Plihon
// Date: 5/1/24

// Constants

// Functions
function sortUserName(){
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //Note the above lines could have been written as one line"
    // userName.toLower().split("").sort().join("")
    return nameSorted;
}

// Output
document.writeln("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");

//bonus code for bonus task
//Ignore/Omit Spaces
//Function should remove all spaces using a regular expression before sorting the characters of the name 
function sortNameIgnoringSpaces(userName) {
    var cleanedName = userName.replace(/\s/g, '').split('').sort().join('');
    return cleanedName;
}

var userName = window.prompt("Enter your name:");
var result = sortNameIgnoringSpaces(userName);
console.log("Sorted name without spaces:", result);
