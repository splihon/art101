// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// Requirements: jQuery must be loaded for this script to work
// Author: Segolen Plihon
//5/15/24

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

$(document).ready(function() {
    $("#make-convo").click(function() {
        const newText = generateRandomText();
        const outputDivs = $("#output .text");
        const newClass = (outputDivs.length % 2 === 0) ? 'text-left' : 'text-right';
        $("#output").append('<div class="text ' + newClass + '"><p>' + newText + '</p></div>');
    });
});