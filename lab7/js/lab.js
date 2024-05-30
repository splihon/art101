// lab.js - Functions
// Author: Segolen Plihon
// Date: 5/1/24

// Function to sort user's name case-insensitively
function sortUserName(userName) {
    console.log("userName =", userName);
    // Split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // Sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // Join array back to a string
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

// Output the sorted names above the image
document.getElementById('sorted-name').innerText = "Oh hey, I've fixed your name: " + sortedName;
document.getElementById('sorted-name-no-spaces').innerText = "Sorted name without spaces: " + cleanedAndSortedName;

// Output the sorted name on top of the image
document.getElementById('name-on-sticker').innerText = sortedName;

// Optionally, you can also console log the names
console.log("Sorted name:", sortedName);
console.log("Sorted name without spaces:", cleanedAndSortedName);
