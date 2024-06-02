// lab15.js
// Author: Segolen Plihon
// This JavaScript file contains the AJAX call to the "Yes or No?" API and handles the button click event to display the result in the output div.

$(document).ready(function() {
    console.log("lab15.js is loaded and ready"); // Add this line to verify the file is loaded

    // Add click event to the button
    $("#activate").click(function() {
        console.log("Activate button clicked"); // Add this line to verify the button click

        // Make an AJAX call to the Yes or No API
        $.ajax({
            // The URL for the request (from the API docs)
            url: "https://yesno.wtf/api",
            // The data to send (in this case, none is needed)
            data: {},
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // What do we do when the API call is successful
            // All the action goes in here
            success: function(data) {
                console.log("AJAX call successful", data); // Add this line to verify the AJAX call success

                // Output the data to the #output div
                var outputHtml = "<p>Answer: " + data.answer + "</p>";
                outputHtml += "<img src='" + data.image + "' alt='" + data.answer + "'>";
                $("#output").html(outputHtml);
            },
            // What we do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});
// Bonus Task JS:
$(document).ready(function() {
    console.log("lab15.js is loaded and ready"); // Add this line to verify the file is loaded

    // Add click event to the button
    $("#activate").click(function() {
        console.log("Activate button clicked"); // Add this line to verify the button click

        // Make an AJAX call to the NASA APOD API
        $.ajax({
            // The URL for the request (from the API docs)
            url: "https://api.nasa.gov/planetary/apod",
            // The data to send
            data: {
                api_key: "DEMO_KEY" // Replace with your actual API key
            },
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // What do we do when the API call is successful
            // All the action goes in here
            success: function(data) {
                console.log("AJAX call successful", data); // Add this line to verify the AJAX call success

                // Output the data to the #output div
                var outputHtml = "<h3>" + data.title + "</h3>";
                outputHtml += "<p>" + data.date + "</p>";
                outputHtml += "<img src='" + data.url + "' alt='" + data.title + "'>";
                outputHtml += "<p>" + data.explanation + "</p>";
                $("#output").html(outputHtml);
            },
            // What we do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    });
});
