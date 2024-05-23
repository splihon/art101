// Author: Segolen Plihon
//5/19/24

document.addEventListener("DOMContentLoaded", function() {
    function sortingHat(str) {
        // Houses array with descriptions
        const houses = [
            { name: "Gryffindor", description: "Brave at heart!" },
            { name: "Ravenclaw", description: "Wise and witty!" },
            { name: "Slytherin", description: "Cunning and ambitious!" },
            { name: "Hufflepuff", description: "Just and loyal!" }
        ];

        // Count the letters in the string
        const length = str.length;
        // Get the remainder with the number of houses
        const mod = length % houses.length;

        // Return the house object based on the value of mod
        return houses[mod];
    }

    $('#button').click(function() {
        // Clear the output div
        $('#output').empty();

        // Get the value of the input field
        const name = $('#input').val();
        // Run sortingHat and store the result
        const house = sortingHat(name);

        // Append a new styled paragraph to the output div
        $('#output').append(`<p>The Sorting Hat has sorted you into ${house.name}</p>`);
        $('#output').append(`<p>${house.description}</p>`);
    });
});


