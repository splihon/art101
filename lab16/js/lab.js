// lab.js
// Author: Segolen Plihon
// JSON and APIs
// Date: 6/4/24
var currentComicNum; // Define at the global scope

// Function to fetch and display comic data
function getAndPutData(comicUrl) {
    console.log('Fetching data from:', comicUrl); // Debugging log
    $.ajax({
        url: `https://api.allorigins.win/get?url=${encodeURIComponent(comicUrl)}`,
        type: "GET",
        dataType: "json",
        success: function(response) {
            const comicObj = JSON.parse(response.contents);
            console.log('Data received:', comicObj); // Debugging log
            currentComicNum = comicObj.num;

            var section = $('<section></section>');
            var title = $('<h1></h1>').text(comicObj.title);
            var img = $('<img>')
                .attr('src', comicObj.img)
                .attr('alt', comicObj.alt)
                .attr('title', comicObj.alt);
            section.append(title, img);

            $('#comic-container').html(section);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// Function to load the initial comic
$(document).ready(function() {
    console.log('Document ready'); // Debugging log
    getAndPutData("https://xkcd.com/info.0.json");

    // Event listeners for the buttons
    $('#prev-button').click(function() {
        console.log('Prev button clicked'); // Debugging log
        if (currentComicNum > 1) {
            getAndPutData(`https://xkcd.com/${currentComicNum - 1}/info.0.json`);
        }
    });

    $('#next-button').click(function() {
        console.log('Next button clicked'); // Debugging log
        if (currentComicNum) {
            getAndPutData(`https://xkcd.com/${currentComicNum + 1}/info.0.json`);
        } else {
            console.log("currentComicNum is not defined");
        }
    });
});
