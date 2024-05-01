// index.js - Function
// Author: Segolen Plihon
// Date: 5/1/24

// Constants

// Functions
function sortUserName(){
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userNmae.split('');
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
    