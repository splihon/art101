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
// Helper function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring swap
    }
    return array;
}

// Function to process the name
function processName(userName) {
    if (!userName) return ""; // If user cancels the prompt or enters nothing

    // Remove spaces and sort the characters case-insensitively
    var cleanedName = userName.replace(/\s/g, '').toLowerCase().split('');
    var sortedName = cleanedName.sort();
    var shuffledName = shuffleArray(sortedName.slice()); // Create a copy and shuffle
    var nameAnagram = shuffledName.join('');

    // Capitalize the first letter and join the rest of the letters in lowercase
    var capitalizedAnagram = nameAnagram.charAt(0).toUpperCase() + nameAnagram.slice(1).toLowerCase();
    return capitalizedAnagram;
}

// Prompt the user and display the result
var userName = window.prompt("Hi. Please tell me your name so I can shuffle and fix it.");
var processedName = processName(userName);

// Output to the webpage
document.body.innerHTML += `<div class="styled-name">Oh hey, I've fixed your name: ${processedName}</div>`;

// Add this CSS for styling in your <head> section or a CSS file
// .styled-name {
//     font-family: Arial, sans-serif;
//     color: blue;
//     font-size: 16px;
// }

    