// Author: Segolen Plihon
//5/19/24

document.addEventListener("DOMContentLoaded", function() {
    function sortingHat(str) {
        // Count the letters in the string
        const length = str.length;
        // Get the remainder with 4
        const mod = length % 4;
        // Return the house based on the value of mod
        if (mod === 0) {
            return "Gryffindor";
        } else if (mod === 1) {
            return "Ravenclaw";
        } else if (mod === 2) {
            return "Slytherin";
        } else {
            return "Hufflepuff";
        }
    }

    $('#button').click(function() {
        // Clear the output div
        $('#output').empty();

        // Get the value of the input field
        const name = $('#input').val();
        // Run sortingHat and store the result
        const house = sortingHat(name);
        // Append a new styled paragraph to the output div
        $('#output').append(`<p>The Sorting Hat has sorted you into ${house}</p>`);
    });
});

